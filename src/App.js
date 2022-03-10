import React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

export default function App() {

    const data = [" Design an responsive webpage using HTML, CSS and JS", "  Create a editable event list using CRUD operators", " Create a scientific calculator using DOM"]
    const [taskList, setTaskList] = useState(data);
    const [tname, setName] = useState("");
    return ( <
        div className = "App" > <
        h3 className = "add" > TASK LIST < /h3><div className="field"> <
        TextField id = "outlined-basic"
        label = "New task"
        variant = "outlined"
        type = "text"
        className = "nt"
        onChange = {
            (event) => setName(event.target.value)
        }
        / > <
        Button variant = "contained"
        className = "btn"
        onClick = {
            () => {
                console.log(tname);
                const newTask = tname;
                setTaskList([...taskList, newTask])
            }
        } > Add task < /Button>  < /
        div >
        <
        p > < /p>  {
        taskList.map((task, index) => ( < TaskList key = { index }
                task = { task }
                deleteButton = { <
                    IconButton color = "error"
                    onClick = {
                        () => {
                            console.log(index);
                            const copy = [...taskList];
                            copy.splice(index, 1);
                            setTaskList(copy);
                        }
                    } >
                    <
                    DeleteIcon / >
                    <
                    /IconButton>} / >
                ))
        } < /
        div >
    )
}



function TaskList({ task, deleteButton }) {
    return ( <
        div className = "task" >

        <
        div className = "container" >
        <
        p className = "task-list" > { task } < /p> {deleteButton} < /
        div >
        <
        Divider /
        >
        <
        /
        div >
    )
}