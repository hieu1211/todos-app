import React from 'react'
import PropTypes from 'prop-types'
import mark from '../../../../assets//img/mark.svg'
import markComplete  from '../../../../assets/img/mark-complete.svg'
import './TodoItem.scss'

function Todo(props) {
    const {value, id ,isComplete,ChangeStatus} = props;
    const status = isComplete?markComplete:mark;
    const className = isComplete?'completed':""
    return (
        <div className={`TodoItem ${className}`}>
            <img src={status} height="32px" onClick={()=>ChangeStatus(id)}></img>
            <p>{value}</p>
        </div>
    )
}

Todo.propTypes = {
    value: PropTypes.string,
    isComplete: PropTypes.bool,
}

export default Todo;

