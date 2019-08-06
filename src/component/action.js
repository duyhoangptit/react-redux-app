function addItem(params) {
    return {type: 'ADD_ITEM', item:params};
}

function removeItem(params) {
    return {type: 'REMOVE_ITEM', index:params};
}

function toggle() {
    return {type: 'TOGGLE_IS_ADDING'};
}

export default {addItem, removeItem, toggle};