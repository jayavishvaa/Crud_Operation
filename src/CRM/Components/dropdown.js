import React from "react";
import { TextField, MenuItem } from "@mui/material";

function Dropdown({ label, value, onChange, data }) {
  return (
    <div>
      <TextField
        label={label}
        margin="dense"
        fullWidth
        size="small"
        onChange={onChange}
        required
        value={value}
        select
        variant="outlined"
      >
        {data.map((type) => (
          <MenuItem
            value={type.countryName}
            key={type.id}
            name={type.countryName}
          >
            {type.countryName}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Dropdown;
