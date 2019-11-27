import { combineReducers } from 'redux'
import { userPersonalData } from '../components/UserData/UserPersonalData/UserPersonalData.reducer.jsx'

//TO DO: for test 
import userInfo from '../components/Pages/Home/Index/TestRedux/Year.reducer.jsx'

const rootReducer = combineReducers({
  userInfo,//exclude this,
  userPersonalData,
})

export default rootReducer
