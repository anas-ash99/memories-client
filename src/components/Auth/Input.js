import { Grid, IconButton, InputAdornment, TextField  } from '@material-ui/core'
import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
export default function Input({name, half, handleChange, label, handleShowPassword, autoFocus, type}) {

  return (
     <Grid xs={12} sm={half? 6 : 12}>
        <TextField 
            margin={'50px'}
            name={name}
            label={label} 
            onChange={handleChange} 
            variant="outlined" 
            required 
            fullWidth 
            autoFocus={autoFocus} 
            type={type} 
            inputProps={name === "password" && {
                endAdornment:(
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === "password"? <Visibility/>: <VisibilityOff/>  }
                        </IconButton>
                    </InputAdornment>
                ) 
            }}

        />
     </Grid>    
  )
}
