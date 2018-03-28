import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleDelete = () => {
        this.props.delete(this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="Note">
                <div className="Note__nav">
                    <Link className="Nav__item" to={`/notes/${this.props.location.state.currentNote.id}/EditNote`}>edit</Link>
                    <div className="Nav__item">
                            <a className="Button__Delete" onClick={this.handleDelete}>Delete</a>
                    </div>
                </div>
                <h4 className="Title">{this.props.location.state.currentNote.title}</h4>
                <p className="Content">{this.props.location.state.currentNote.text}</p>
            </div>
        );
    };
    }
    
export default Note;