import { AppBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./categoryBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import your CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction, getCategorySubCollection } from "../../redux/category/categoryAction";

const CategoriesBar = ({ categories }) => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const dispatch = useDispatch()
    const {selectedCategoryCollection} = useSelector(state=>state.category)

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  useEffect(()=>{
    if(hoveredCategory?.id){
        dispatch(getCategorySubCollection(hoveredCategory.id))

    }
    
    

  },[hoveredCategory])
  useEffect(()=>{
    dispatch(getCategoryAction())

  },[])
  return (
    <div className="categories-bar">
      <div className="categories-container">
        <ul className="categories-list">
          <li className="category-item categories-title">
            Categories <ArrowDropDownIcon />
          </li>
          {categories.map((category) => (
            <li key={category.id} className="category-item" onMouseEnter={() => handleCategoryHover(category)}
            onMouseLeave={handleMouseLeave}>
              {category.name}


              {hoveredCategory && hoveredCategory.id === category.id &&
                <div className="subcategory-container">
                  {selectedCategoryCollection.map(subcategory => (
                    <div key={subcategory.id} className="subcategory-item">
                      <img  src={subcategory.categoryImage} alt={subcategory.name} />
                      <div>{subcategory.name}</div>
                    </div>
                  ))}
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBar;
