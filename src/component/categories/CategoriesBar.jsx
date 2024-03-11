import { AppBar, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./categoryBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import your CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubCategory,
  getCategoryAction,
  getCategorySubCollection,
} from "../../redux/category/categoryAction";
import { Link } from "react-router-dom";
import HoverDropdown from "./HoverDropdown";

const CategoriesBar = ({ categories }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dispatch = useDispatch();
  const {categoryList,subCategorylist } = useSelector((state) => state.category);

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  
  useEffect(() => {
    dispatch(getCategoryAction());
    
  }, []);
  useEffect(() => {
    if (categoryList) {
      // Dispatch an action to fetch all subcategories based on categoryList

      dispatch(getAllSubCategory(categoryList));
    }
  }, [categoryList]);
  const subcatList = subCategorylist?.filter(cat=>hoveredCategory && cat.parentCatId ===hoveredCategory.id)

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
                  {subcatList?.map((subcategory) => (
                    <Link to={`/subCategory/${subcategory.name}`} key={subcategory.id}>
                      <div className="subcategory-item" onClick={()=>setHoveredCategory(null)}>
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
