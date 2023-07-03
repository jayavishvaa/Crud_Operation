import React, {useContext} from 'react';
import {BlogContext} from '../Context/blogContext';
import LongMenu from '../components/editButton';

//MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BlogList() {

  const { users, removeBlog } = useContext(BlogContext);
   
  return (
    <div style={{padding:'10% 20%'}}>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {users.map(user => (
                    <Grid xs={4}>
                        <Item style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <div>Name: {user.name}</div>
                                <div>Description: {user.description}</div>
                                <div>Category: {user.category}</div>
                            </div>
                            <LongMenu user={user} removeBlog={removeBlog}/>
                        </Item>
                    </Grid>
                ))}

                

                <Grid xs={4}>
                    <Item>2</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>3</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>

    </div>
  )
}

export default BlogList;