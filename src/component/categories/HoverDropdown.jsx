import React, { useEffect, useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction, getCategorySubCollection } from '../../redux/category/categoryAction';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import your CSS file for styling


function HoverDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const {categoryList, selectedCategoryCollection} = useSelector(state=>state.category);
  const [selectedCategory, setSelectedCategory] = useState({})
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClick = ( event,category) => {
    setSubMenuAnchorEl(event.currentTarget)
    
    setSelectedCategory(category)
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };

  
  useEffect(()=>{
    dispatch(getCategoryAction())


  },[])
  useEffect(()=>{
    if(selectedCategory.id){
      dispatch(getCategorySubCollection(selectedCategory.id))
    }

  },[selectedCategory])

  return (
    <div>
      <li
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{display:'flex', alignItems:'center'}}
      >
        Categories <ArrowDropDownIcon/>
      </li>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        

      >
        <Link to='/allProduct'>
        <MenuItem>All product</MenuItem>
        </Link>
        
        {
          categoryList.map(category=>{
            return <Link key={category.id} to={`/category/${category.name}`} style={{color:'black'}}><MenuItem sx={{textTransform:'capitalize'}} onClick={(e)=>handleSubMenuClick(e,category)}>{category.name}</MenuItem></Link>
          })
        }
        
      </Menu>
     

      
      
    </div>
    
  );
}

export default HoverDropdown;