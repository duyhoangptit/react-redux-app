import React from 'react';
import './Note.css';
import {connect} from 'react-redux';

class Note extends React.Component {

    removeItem() {
        // var indexItem = this.props.index;
        // Cach su dung syntax es6
        // lay gia tri index trong props va gan vao bien index
        var { index, dispatch } = this.props;
        // // Goi xu ly xoa item tu component Parent
        // handleRemove(index);

        dispatch({type: 'REMOVE_ITEM', index: index});
    }

    render() {
        return (
            <div className="div-note">
                <p>{this.props.children}</p>
                <button onClick={this.removeItem.bind(this)}>Delete</button>
            </div>
        );
    }
}

// export default Note;
export default connect()(Note);