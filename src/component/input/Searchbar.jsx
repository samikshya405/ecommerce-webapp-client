import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onChange, placeholder }) => {
  return (
    <div>
      <TextField
        placeholder={placeholder}
        variant='standard'
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default Searchbar;