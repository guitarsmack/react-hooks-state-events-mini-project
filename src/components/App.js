import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory,setSelectedCategory] = useState("All")
  const [taskList,setTaskList] = useState(TASKS)

  function submitTask(event){
    event.preventDefault()

    const form = event.target
    const text = form.elements.text.value
    const categoryOption = form.elements.category.value
    const newTask = {
      text: text,
      category: categoryOption
    }

    setTaskList((taskList) => [...taskList, newTask])

    console.log(newTask)
  }

  function selectCategory(category){
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectCategory={selectCategory} categories={CATEGORIES} />
      <NewTaskForm submitTask={submitTask} categories={CATEGORIES}/>
      <TaskList category={selectedCategory} tasks={taskList} setTasks={setTaskList} />
    </div>
  );
}

export default App;
