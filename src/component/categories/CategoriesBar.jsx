import { AppBar, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./categoryBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import your CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryAction,
  getCategorySubCollection,
} from "../../redux/category/categoryAction";
import { Link } from "react-router-dom";
import HoverDropdown from "./HoverDropdown";

const CategoriesBar = ({ categories }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dispatch = useDispatch();
  const { selectedCategoryCollection } = useSelector((state) => state.category);

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  useEffect(() => {
    if (hoveredCategory?.id) {
      dispatch(getCategorySubCollection(hoveredCategory.id));
    }
  }, [hoveredCategory]);
  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);
  return (
    <div className="categories-bar">
      <div className="categories-container">
        <ul className="categories-list">
          <li className="category-item categories-title">
            <HoverDropdown />
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className="category-item"
              onMouseEnter={() => handleCategoryHover(category)}
              onMouseLeave={handleMouseLeave}
            >
              {category.name}

              {hoveredCategory && hoveredCategory.id === category.id && (
                <Paper className="subcategory-container">
                  {selectedCategoryCollection.map((subcategory) => (
                    <Link to="" key={subcategory.id}>
                      <div className="subcategory-item">
                      <Paper
                        className="subcatImageWrapper"
                        
                      >
                        <img
                          src={subcategory.categoryImage}
                          alt={subcategory.name}
                          
                        />
                        
                      </Paper>
                      <div>{subcategory.name}</div>
                      </div>
                     
                    </Link>
                  ))}
                </Paper>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBar;
