import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component {
    toggle() {
        // es 6
        var {dispatch} = this.props;

        dispatch({type: 'TOGGLE_IS_ADDING'});
    }

    handleSubmit(e) {
        // Se ngan chan refresh trang web khi enter hoac submit
        e.preventDefault();

        // es 6
        var {dispatch} = this.props;

        var note = this.refs.txtNote.value;
        dispatch({type: 'ADD_ITEM', item: note});

        //
        dispatch({type: 'TOGGLE_IS_ADDING'});
        // //
        // var { handleAdd } = this.props;
        // // 
        // //
        // handleAdd(note);
        // // 
        // this.refs.txtNote.value = '';
        // //
        // this.toggle();
    }

    render() {
        if (this.props.isAdding) return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder='Enter your text' ref='txtNote' />
                <br />
                <button type="submit">Add</button>
            </form>
        );

        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}
//
// function NodeForm() {
//     return (
//         <div>

//         </div>
//     );
// }

// export default NoteForm;

// Cach ket noi component with react-redux
export default connect(function (state) {
    return { isAdding: state.isAdding }
})(NoteForm);