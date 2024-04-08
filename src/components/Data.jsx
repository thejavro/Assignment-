import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const [info,setinfo]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response);
            setinfo(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
        }, []);
   
  return (
    <div>
      <br /><br /><br /><br />
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>TITLE</TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {info.map((info,index) => (
                    <TableRow key={index}>
                    <TableCell>{info.id}</TableCell>
                    <TableCell>{info.title}</TableCell>
                  
                    </TableRow>

                ))}
                
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Data;