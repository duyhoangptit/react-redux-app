import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';

class List extends React.Component {
    removeItem(index) {
        this.state.listItem.splice(index, 1);

        this.setState(this.state);
    }

    addItem(item) {
        this.state.listItem.push(item);

        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <NoteForm
                    handleAdd={this.addItem.bind(this)} />
                <br />
                {this.props.listItem.map((e, index) =>
                    <Note index={index}
                        handleRemove={this.removeItem.bind(this)}
                        key={index}>{e}</Note>)}
            </div>
        );
    }
}

// Cach ket noi component with react-redux
export default connect(function (state) {
    return { listItem: state.listItem }
})(List);