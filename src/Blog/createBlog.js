import React, { useState, useContext } from "react";
import "../css/createBlog.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { BlogDispatch } from "../Context/blogContext";
import { useNavigate } from "react-router-dom";

//uuid
import { v4 as uuid } from "uuid";

const items = [
  {
    label: "Sports",
    key: "1",
  },
  {
    label: "Entertainment",
    key: "2",
  },
  {
    label: "Education",
    key: "3",
  },
];

function CreateBlog() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  let navigate = useNavigate();
  // const state = useContext(BlogContext);
  const dispatch = useContext(BlogDispatch);

  // const totalBlog = state.length;s

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleName = (p) => {
    setName(p.target.value);
  };

  const onSubmit = () => {
    setName("");
    setDescription("");
    setCategory("");
    dispatch({
      type: "added",
      id: uuid(),
      // id: totalBlog + 1,
      name: name,
      description: description,
      category: category,
    });
    navigate("/");
  };

  return (
    <div className="Container">
      <div className="form-box">
        {/* Name input field */}
        <h1>Add a Blog</h1>
        <TextField
          id="outlined-basic"
          className="Name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleName}
          placeholder="Name"
          size="small"
        />

        {/* Description Text area input */}

        <TextField
          multiline
          className="Description"
          placeholder="Description"
          rows={5}
          value={description}
          onChange={handleDescription}
        />

        {/* Category select with MUI */}

        <FormControl sx={{ minWidth: 200 }} size="small" className="Category">
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={category}
            label="Category"
            onChange={handleCategory}
            size="small"
            fullWidth
          >
            {items?.map((item) => (
              <MenuItem value={item.label} key={item.key}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button variant="contained" size="small" onClick={onSubmit}>
            Submit
          </Button>

          <Button
            variant="contained"
            size="small"
            color="error"
            style={{ marginLeft: "25%" }}
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
