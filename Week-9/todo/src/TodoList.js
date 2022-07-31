import React from 'react';
import Activity from './Activity';

function TodoList(props) {
    const { addTask } = props;
    return (
        <>
            <div className="TodoList">
                <Activity newTask={addTask} />
            </div>
        </>
    )
}

export default TodoList;