import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from 'react-router-dom';
import { BlogDispatch } from '../Context/blogContext';



// const options = [
//   'edit',
//   'delete'
// ];

// const ITEM_HEIGHT = 48;

export default function LongMenu({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const dispatch = React.useContext(BlogDispatch);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };


  const handleClose = () => {

    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
        {/* {options?.map((option) => ( */}
        {/* <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem> */}
          <MenuItem onClick={() => navigate(`/editBlog/${user.id}`)}>
            edit
          </MenuItem>
          
          <MenuItem onClick={() => {
            dispatch({
              type: 'deleted',
              id: user.id
            })
          }}>
            delete
          </MenuItem>
        {/* ))} */}
      </Menu>
    </div>
  );
}