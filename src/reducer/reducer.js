import {combineReducers} from 'redux';
import listItem from './item-list';
import isAdding from './is-adding';

var reducer = combineReducers({listItem,isAdding});

export default reducer;