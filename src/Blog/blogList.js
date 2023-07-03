import React, {useContext, useState} from 'react';
import {BlogContext} from '../Context/blogContext';
import LongMenu from '../components/editButton';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


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


const FilterList = [
    {id:0, cate:'All'},
    {id:1, cate:'Sports'},
    {id:2, cate:'Entertainment'},
    {id:3, cate:'Education'},
]

function BlogList() {
    const state = useContext(BlogContext);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);

    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = state.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(state.length / blogsPerPage);

   
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row'}}>
            <FormControl
                sx={{ minWidth: 200 }} 
                size="small"
            >
                <InputLabel id="category-filter-label">Category</InputLabel>
                <Select
                    labelId="category-filter-label"
                    value={categoryFilter}
                    onChange={handleCategoryFilterChange}
                    id="demo-select-small"
                    label="Category"

                >
                    {FilterList?.map((item) => (
                        <MenuItem value={item.cate} key={item.id}>{item.cate}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* <div>
                <Button onClick={() => setCategoryFilter()}>
                    Clear filter
                </Button>
            </div> */}
        </div> 
        <div style={{padding:'10% 20%'}}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {currentBlogs?.filter((blog) => 
                        categoryFilter === 'All' ? true : blog.category === categoryFilter
                        )?.map(user => (
                            <Grid xs={4} key={user.id}>
                                <Item key={user.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div>Name: {user?.name}</div>
                                        <div>Description: {user?.description}</div>
                                        <div>Category: {user?.category}</div>
                                    </div>
                                    <LongMenu user={user}/>
                                    {/* <Task task={state}/> */}
                                    {/* <LongMenu user={user} removeBlog={removeBlog}/> */}
                                </Item>
                            </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            {Array.from({ length: totalPages }, (_, index) => (
                <Button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </Button>
            ))}
      </div>
    </div>
  )
}

export default BlogList;


