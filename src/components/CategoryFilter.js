import React from "react";

function CategoryFilter({ categories, selectCategory }) {

  function selected(category, event){
    
    const options = Array.from(document.querySelector(".categories").children)
      options.forEach(elem => {
        return elem.classList.value ? elem.classList.remove("selected") : null
      })
    event.target.className="selected"

    selectCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => 
      <button key={category} onClick={(event) => selected(category,event)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
