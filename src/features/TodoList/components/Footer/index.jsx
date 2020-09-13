import React from 'react'
import classNames from 'classnames'
import './Footer.scss'
import TodoList from '../..';

export default function Footer(props) {
    const {Todolist,StatusFilter, ChangeFilter,ClearCompleted} = props;
    const countInComplete = Todolist.reduce((count,todo)=>{
        if(todo.isComplete === false)
            return ++count;
        return count;
    },0)
    const clearClassName = countInComplete===Todolist.length?"invisible":";"
    return (
        <div className="footer">
            <div className="count">{countInComplete} items left</div>
            <div className="status">
                <span onClick={ChangeFilter} 
                className={classNames({'active':StatusFilter==="All"})}>All</span>
                <span onClick={ChangeFilter}
                className={classNames({'active':StatusFilter==="Active"})}>Active</span>
                <span onClick={ChangeFilter}
                className={classNames({'active':StatusFilter==="Completed"})}>Completed</span>
            </div>
            <div className={`clear ${clearClassName}`} onClick={ClearCompleted}>Clear completed</div>
        </div>
    )
}
