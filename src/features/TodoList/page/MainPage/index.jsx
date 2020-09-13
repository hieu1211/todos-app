import React, { useState, useEffect } from 'react'

import classNames from 'classnames'
import Footer from '../../components/Footer'
import './MainPage.scss'
import MarkAll from '../../../../assets/img/mark-all.svg'
import Todo from '../../components/TodoItem/Todo'

export default function MainPage() {
    const [Todolist, setTodolist] = useState(JSON.parse(localStorage.getItem("Todolist"))||[]);
    const [StatusFilter, setStatusFilter] = useState("All");
    useEffect(() => {
        localStorage.setItem("Todolist",JSON.stringify(Todolist));
        return () => {
        }
    });
    const handleInputEnter = (e) =>{
        if(e.keyCode === 13 && e.target.value){
             setTodolist([...Todolist,
                {
                    value: e.target.value,
                    isComplete: false
                }]);
            e.target.value = ""
        } 
    }

    const ChangeStatus = (todoIndex) =>{
        let temp = [...Todolist];
        temp[todoIndex] = {
            value:temp[todoIndex].value,
            isComplete: !temp[todoIndex].isComplete
        }
        setTodolist(temp)
    }

    const ChangeFilter = (e) =>{
        const value = e.target.textContent;
        setStatusFilter(value);
    }

    const CheckAllComplete = () =>{      
        return Todolist.reduce((flag,todo)=>{
            return todo.isComplete === false?false:flag;
        },true);
    }

    const CompleteAll = ()=>{
        let temp = [...Todolist];

        if(CheckAllComplete()===false){
            temp = temp.map(todo=>({...todo,isComplete:true}))
            setTodolist(temp);
        }
        else{
            temp = temp.map(todo=>({...todo,isComplete:false}))
            setTodolist(temp);
        }
    }

    const ClearCompleted = ()=>{
        let temp = [...Todolist];
        temp = temp.filter(todo=> !todo.isComplete);
        setTodolist(temp);
    }
    
    const Listrender = StatusFilter === "All"?
        Todolist:
        StatusFilter === "Active"?
        Todolist.filter(todo=>todo.isComplete === false):
        Todolist.filter(todo=> todo.isComplete === true);
    return (
        <div className="todolist-container">
            <header>
                <img src={MarkAll} alt="CheckImg" height="30" onClick={CompleteAll}
                className={classNames({"active":CheckAllComplete()})}></img>
                <input onKeyUp={handleInputEnter} 
                type="text" 
                placeholder="Add something..."></input>
            </header>
            

            {Listrender.map((todo,index)=>
                <Todo value={todo.value}
                id={index}
                isComplete={todo.isComplete}
                ChangeStatus={ChangeStatus}
                />)}
            {Todolist.length? <Footer Todolist={Todolist}
                                StatusFilter={StatusFilter} 
                                ChangeFilter={ChangeFilter}
                                ClearCompleted={ClearCompleted}/>:""}
        </div>
    )
}
