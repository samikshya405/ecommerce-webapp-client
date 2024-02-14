import { TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({type, ...rest}) => {
  if (type === 'textarea') {
    return (
      <TextField
        {...rest}
        fullWidth
        multiline
        rows={4} // Adjust rows as needed
        margin="normal"
        
      />
    );
  } else {
    return (
      <TextField
      type={type}
        {...rest}
        fullWidth
        margin="normal"
        className='input'
      />
    );
  }
}

export default CustomInput