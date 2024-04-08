import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar  color='success'>
        {/* <Typography>BlogApplication</Typography> */}
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BLOGS
          </Typography>

                <Button variant="contained" color="warning"><Link to ='/blog'style={{textDecoration: 'none' ,color:'white'}}>Blog</Link> </Button>&nbsp;
                <Button variant="contained" color="warning"><Link to ='/form' style={{textDecoration: 'none' ,color:'white'}}>BlogForm</Link> </Button>&nbsp;
 
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
