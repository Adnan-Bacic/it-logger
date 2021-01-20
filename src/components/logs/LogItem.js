import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: `Log ${log.id} deleted`})
    };

    const onEdit = () => {
        setCurrent(log);
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" onClick={onEdit} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-test'}`}>{log.message}</a>
                <br></br>
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>
                    <br></br>
                    <span>Last updated by </span>
                    <span className="black-text">{log.tech}</span>
                    <br></br>
                    <span>On <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment></span>
                    <a href="#!" onClick={onDelete} className="secondary-content">
                        <i className="material-icons grey-text" title="Delete">delete</i>
                    </a>
                </span>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteLog, setCurrent})(LogItem)