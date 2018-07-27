import { combineReducers } from 'redux'
import Listreducer from './Listreducer';
import Statusreduce from './Startusbarreducer';
import Isaddingreduce from './Isaddingreduce';
const Reducer = combineReducers({
    List: Listreducer,
    Status : Statusreduce,
    Isadding : Isaddingreduce
})
export default Reducer;