import React, {useState, useContext, useEffect} from 'react';
import '../css/createBlog.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { BlogDispatch, BlogContext } from '../Context/blogContext';
import {useNavigate, useParams} from 'react-router-dom';




const items = [
    {
        label: 'Sports',
        key: '1',
    },
    {
        label: 'Entertainment',
        key: '2',
    },
    {
        label: 'Education',
        key: '3',
    }
]


function EditPage() {
    const [selectedUser, setSelectedUser] = useState({
        id:'',
        name:'',
        description:'',
        category:''
    })
    let navigate = useNavigate();
    const dispatch = useContext(BlogDispatch);
    const state = useContext(BlogContext);
    const {id} = useParams();
    const currentUserId = id;


    const handleCategory = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
        
    };

    const handleDescription = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value});
    };

    const handleName = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const userId = currentUserId;
        const selectUser = state.find(user => user.id === userId)
        setSelectedUser(selectUser);
     },[currentUserId, state])

    const onSubmit = () => {

        dispatch({
            type: 'edited',
            id: selectedUser.id,
            name: selectedUser.name,
            description: selectedUser.description,
            category: selectedUser.category
        });

        navigate('/');
    }

  return (
    <div className='Container'>
        <div className='form-box'>

            {/* Name input field */}
                <h1>Add a Blog</h1>
                <TextField 
                    name="name"
                    id="outlined-basic" 
                    className='Name'
                    label="Name"                    
                    variant="outlined" 
                    value={selectedUser?.name} 
                    // value={se.name} 
                    onChange={handleName}
                    placeholder='Name'
                    size='small'
                />
            

            {/* Description Text area input */}

            <TextField 
                multiline
                name='description'
                className='Description'
                placeholder='Description'
                rows={5}
                // value={state.description}
                value={selectedUser?.description}
                onChange={handleDescription}
            />

            {/* Category select with MUI */}

            <FormControl 
                sx={{ minWidth: 200 }} 
                size="small"
                className='Category'
            >
                <InputLabel id="demo-select-small-label">Category</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedUser?.category}
                    // value={state.category}
                    label="Category"
                    name='category'
                    onChange={handleCategory}
                    size='small'
                    fullWidth
                >
                    {items?.map((item) => (
                        <MenuItem key={item.key} value={item.label}>{item.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{display:'flex',flexDirection:'row'}}>
                    <Button 
                        variant="contained" 
                        size="small"
                        onClick={onSubmit}
                    >
                        Update
                    </Button>

                    <Button 
                        variant="contained" 
                        size="small"
                        color='error'
                        style={{marginLeft:'25%'}}
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </Button>
            </div> 
        </div>
    </div>
  )
}

export default EditPage;                                   