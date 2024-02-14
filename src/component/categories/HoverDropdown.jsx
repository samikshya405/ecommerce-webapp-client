import React, { useState } from 'react';

// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button, ClickAwayListener, Menu, MenuItem, MenuList, Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function HoverDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        sx={{color:'black'}}
      >
        Categories <ArrowDropDownIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >
        <MenuItem onClick={handleSubMenuOpen}>Option 1 <ChevronRightIcon/></MenuItem>
        <Menu
          id="submenu"
          anchorEl={subMenuAnchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleSubMenuClose}
          onMouseLeave={handleSubMenuClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleSubMenuClose}>
              <MenuList>
                <MenuItem onClick={handleSubMenuClose}>Submenu Item 1</MenuItem>
                <MenuItem onClick={handleSubMenuClose}>Submenu Item 2</MenuItem>
                <MenuItem onClick={handleSubMenuClose}>Submenu Item 3</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Menu>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}

export default HoverDropdown;
