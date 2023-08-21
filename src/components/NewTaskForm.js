import React from "react";

function NewTaskForm({ categories, submitTask }) {
  return (
    <form onSubmit={submitTask} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.filter(category => category !== "All").map(category => <option key={category} >{category}</option> )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
