import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const Blogform = () => {
  return (
    <div>
              <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h5" gutterBottom>
            BlogForm
        </Typography>
        <TextField id="outlined-basic" label="BlogName" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Description" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="AuthorName" variant="outlined" color="success" focused /><br /><br />
         <br /><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Blogform
