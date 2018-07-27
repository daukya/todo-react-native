import {createStore} from 'redux';
import Reducer from './reducer/Reducer';

const Store = createStore(Reducer);
export default Store;