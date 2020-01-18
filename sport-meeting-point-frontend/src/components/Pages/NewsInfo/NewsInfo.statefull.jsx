import React, { Component } from 'react'
import NewsInfoStateless from './NewsInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noImg from '../../../../static/No-Image-Basic.png'
import { fetchSportNewsById, refreshSportNewsArray } from '../../../redux/actions/News.actions'
import { CustomAlertOk, CustomAlertWarning } from '../../Layouts/CustomAlert'
import { subscribeToNews, unsubscribeToNews, getSubscribesForEventByEventId } from '../../../rest/SportNews'

class NewsInfoStatefull extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadPage: true,
            sportNews: null,
            newsDbId: null,

            messageNode: null,
            reloadOnDeleteMessageNode: false,
            messageText: '',

            getUserAlreadyIsSubscribedToThisNews: false

        };

        this.loadNews.bind(this);
        this.onSubscribeClick.bind(this)
        this.onUnsubscribeClick.bind(this)

        // getSubscribesForEventByEventId(1, this.props.getTokenMethod())
        //     .then(res => {
        //         res.json()
        //             .then(data => {
        //                 console.log(data)
        //             })
        //     })
    }

    loadNews(newsDbId) {
        const news = this.props.allNews;

        const eIndex = news.findIndex(a => a.id === newsDbId);

        this.setState({
            newsDbId: newsDbId
        });

        if (eIndex === -1) {
            this.props.fetchSportNewsById(newsDbId)
        } else {
            this.setState({
                sportNews: news[eIndex],
                loadPage: false
            })
            // this.props.refreshSportEventArray()
        }


    }

    componentDidMount() {

        this._isMounted = true;
        const getNewsIdFromUrl = Number(
            window.location.href.split('?id=')[1]
        );
        this.loadNews(getNewsIdFromUrl);

        window.scrollTo(0, 0);

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.sportNews && !nextState.sportNews) {
            const news = this.props.allNews
            const nIndex = news.findIndex(a => a.id === this.state.newsDbId)

            if (nIndex !== -1) {
                this.setState({
                    sportNews: news[nIndex],
                    loadPage: false
                })
                // return false
            }


        }


        if (!this.state.getUserAlreadyIsSubscribedToThisNews
            && this.state.sportNews
            && this.state.sportNews.subscribers
            && this.state.sportNews.subscribers.findIndex(a => a.email === this.props.getUserEmail) !== -1) {


            this.setState({ getUserAlreadyIsSubscribedToThisNews: true })
        }

        // console.log(this.state.getUserAlreadyIsSubscribedToThisNews, nextState.getUserAlreadyIsSubscribedToThisNews)
        // console.log(this.props.getUserEmail)

        return true
    }



    componentWillUnmount() {
        this._isMounted = false
    }

    onSubscribeClick(newsId, ) {
        subscribeToNews(newsId, this.props.getTokenMethod())
            .then(res => {
                if (res.status === 200 && res.ok) location.reload()
            })

    }

    onUnsubscribeClick(newsId) {
        unsubscribeToNews(newsId, this.props.getTokenMethod())
            .then(res => {
                if (res.status === 200 && res.ok) location.reload()
            })
    }


    render() {
        const sportNews = this.state.sportNews;
        // const Message = this.state.messageNode;

        return (
            <>
                {this.state.loadPage && <Loading />}

                {/* {
                    Message && <Message
                        message={this.state.messageText}
                        onCloseHandler={e => {
                            this.setState({
                                messageNode: null
                            });

                            if (this.state.reloadOnDeleteMessageNode) location.reload()

                        }}
                    />
                } */}

                {
                    sportNews &&
                    <NewsInfoStateless
                        id={sportNews.id}
                        title={sportNews.title}
                        authorFullName={sportNews.authorFullName}
                        // newsDate={sportNews.newsDate}
                        context={sportNews.context}
                        image={sportNews.image || noImg}
                        onSubscribeClick={id => this.onSubscribeClick(id)}
                        onUnsubscribeClick={id => this.onUnsubscribeClick(id)}
                        getUserAlreadyIsSubscribedToThisNews={this.state.getUserAlreadyIsSubscribedToThisNews}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    allNews: state.allNewsData.allNews,
    getTokenMethod: state.authenticationData.getToken,
    isAuthenticated: state.authenticationData.isAuthenticated,
    getUserEmail: state.authenticationData.email,
});

const mapDispatchToProps = dispatch => (
    {
        fetchSportNewsById: bindActionCreators(fetchSportNewsById, dispatch),
        refreshSportEventArray: bindActionCreators(refreshSportNewsArray, dispatch)
    }
);

NewsInfoStatefull.propTypes = {
    allNews: PropTypes.array,
    fetchSportNewsById: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsInfoStatefull)
