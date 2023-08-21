import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, category}) {

  

  const newList = tasks.filter(task => task.category === category || category === "All")

  function hadleDelete(text){
    setTasks((taskList) => taskList.filter((task) => {
      return task.text === text ? false : true
    }))
  }

  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {newList.map((task) => {
        return <Task key={task.text} handleDelete={hadleDelete} task={task} />
      })}
    </div>
  );
}

export default TaskList;
