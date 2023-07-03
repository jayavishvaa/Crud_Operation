import React, {useState, useContext, useEffect} from 'react';
import '../css/createBlog.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { BlogContext, BlogDispatch } from '../Context/blogContext';


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

function EditBlog(props) {
    // const [selectedUser, setselectedUser] = useState({
    //     id: '',
    //     name: '',
    //     description: '',
    //     category: ''
    // });

    // const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(BlogDispatch);
    const { state } = useContext(BlogContext);
    // let tableContent;


    let navigate = useNavigate();
    // const { users, editBlog } = useContext(BlogContext);

    // const { id } = useParams();

    // const currentUserId = id;





    // const handleCategory = (event) => {
    //     setselectedUser({...selectedUser, [event.target.category]: event.target.value})
    // };

    // const handleDescription = (e) => {
    //     setselectedUser({...selectedUser, [e.target.description]: e.target.value})
    // };

    // const handleName = (p) => {
    //     setselectedUser({...selectedUser, [p.target.name]: p.target.value})
    // }

    // useEffect(() => {
    //     const UserId = currentUserId;
    //     console.log(UserId);
    //     const selectedUser = users.find(user => user.id === Number(UserId))
        
    //     setselectedUser(selectedUser)
    //     console.log(selectedUser);
    // },[currentUserId,users])

    const onSubmit = () => {
        // editBlog(selectedUser);
        navigate('/');
    }

  return (
    <div className='Container'>
        <div className='form-box'>

            {/* Name input field */}
                <h1>Add a Blog</h1>
                <TextField 
                    id="outlined-basic" 
                    // name='name'
                    className='Name'
                    label="Name"                    
                    variant="outlined" 
                    value={state.name} 
                    onChange={e => {
                        dispatch({
                            type: 'edited',
                            name: e.target.value
                        })
                    }}
                    placeholder='Name'
                    size='small'
                />
            

            {/* Description Text area input */}

            <TextField 
                // name='description'
                multiline
                className='Description'
                placeholder='Description'
                rows={5}
                // maxRows={10}
                value={state.description}
                onChange={e => {
                    dispatch({
                        type: 'edited',
                        description: e.target.value
                    })
                }}
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
                    // name='category'
                    value={state.category}
                    label="Category"
                    onChange={e => {
                        dispatch({
                            type: 'edited',
                            category: e.target.value
                        })
                    }}
                    size='small'
                    fullWidth
                >
                    {items?.map((item) => (
                        <MenuItem value={item.key} key={item.key}>{item.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{display:'flex',flexDirection:'row'}}>
                <Button 
                    variant="contained" 
                    size="small"
                    onClick={onSubmit}
                >
                    Edit
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

export default EditBlog;                               
