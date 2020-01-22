import { url } from '../../utils/server-url'
import * as authUtils from '../utils/Authentication'
import {
  PUSH_NEWS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_NEWS_ARRAY,
  SET_NEWS_FETCH_COMPLETE,
  SET_NEWS_IS_FETCH

} from '../constants/News.constants'
import byteToImageSrc from '../../utils/byteToImageSrc'
import noImage from '../../../static/No-Image-Basic.png'
import { getSubscribesForEventByEventId } from '../../rest/SportNews'

function addNewsInStore(data) {
  return {
    type: PUSH_NEWS_WITHOUT_A_IMAGE_TO_ARRAY,
    payload: data
  }
}

function refreshSportNewsArray() {
  return {
    type: REFRESH_SPORT_NEWS_ARRAY
  }
}

function addImageForNewsIntoStore() {
  return refreshSportNewsArray()
}

function setSubscribersForNewsObject() {
  return refreshSportNewsArray()
}

function startFetch() {
  return {
    type: SET_NEWS_IS_FETCH
  }
}

function stopFetch() {
  return {
    type: SET_NEWS_FETCH_COMPLETE,

  }
}

function fetchSportNewsImage(sportNewsObject) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }
    dispatch(startFetch())
    fetch(`${url}/api/for_all/news/image_by_id?id=${sportNewsObject.id}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        // console.log('object', data)
        if (data === 'NOT_FOUND') {
          sportNewsObject.image = noImage
        } else {
          sportNewsObject.image = byteToImageSrc(data.image)
        }
        dispatch(stopFetch())
        dispatch(addImageForNewsIntoStore())
      })
      .catch((error) => {
        console.warn('News action fetch image error:', error)
        sportNewsObject.image = noImage
        dispatch(stopFetch())
        dispatch(addImageForNewsIntoStore())
      })
  }
}

function loadFixedNumberOfNews(excludeIdArray = [], fixedNumber = 5) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()

    const requestData = JSON.stringify({
      getUINewsId: excludeIdArray,
      theNumberOfNecessaryNews: fixedNumber
    })

    const requestSetting = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      },
      body: requestData
    }

    fetch(`${url}/api/for_all/news/get_news`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        dispatch(addNewsInStore(data))
        data.forEach(a => {
          dispatch(fetchSportNewsImage(a))
          dispatch(fetchSubscribersByNewsId(a))
        })
      })
      .catch((error) => {
        console.warn('News action error:', error)
      })
  }
}

function fetchSportNewsById(sportNewsId) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }
    fetch(`${url}/api/for_all/news/news_by_id?id=${sportNewsId}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        dispatch(addNewsInStore([data]))
        dispatch(fetchSportNewsImage(data))
        dispatch(fetchSubscribersByNewsId(data))
        // console.log(data)
      })
      .catch((error) => {
        console.warn('News action fetch news by id error:', error)
      })
  }
}

function fetchSubscribersByNewsId(newsObj) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    getSubscribesForEventByEventId(newsObj.id, token)
      .then(res => {
        if (res.status === 200 && res.ok) {
          res.json()
            .then(data => {
              // console.log(data)
              newsObj.subscribers = data
              dispatch(setSubscribersForNewsObject())
            })
        }
      })
  }
}

export {
  refreshSportNewsArray,
  fetchSportNewsById,
  loadFixedNumberOfNews
}
