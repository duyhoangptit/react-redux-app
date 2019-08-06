import reducer from './reducer';

var redux = require('redux');

// var defaultState = {
//     listItem: ["A", "B", "C"],
//     isAdding: false
// };

// var reducer = (stateOld = defaultState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
//             return { ...stateOld, isAdding: !stateOld.isAdding };
//         case 'ADD_ITEM':
//             return { ...stateOld, listItem: [...stateOld.listItem, action.item] };
//         case 'REMOVE_ITEM':
//             return { ...stateOld, listItem: stateOld.listItem.filter((e, i) => i != action.index) };
//         default:
//             return stateOld;
//     }

// };
// Chia tach function reducer

// Tu reducer tao store
var store = redux.createStore(reducer);
store.subscribe(() => {
    // check nhung lan store thay doi
    console.log(store.getState());
});

// Thuc thi reducers
// store.dispatch({
//     type: 'TOGGLE_IS_ADDING'
// });

// store.dispatch({
//     type: 'ADD_ITEM',
//     item: 'Ta Duy Hoang'
// });

// store.dispatch({
//     type: 'REMOVE_ITEM',
//     index: 1
// });

export default store;