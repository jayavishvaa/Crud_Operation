import React, { useState } from "react";
import BlogList from "./blogList";
import { useNavigate } from "react-router-dom";
// import { BlogContext } from "../Context/blogContext";
import { Button, TextField } from "@mui/material";
import BarChart from "../components/barChart";
import Home from "../CRM/home";

function Blogpage(data) {
  let navigate = useNavigate();
  // const state = useContext(BlogContext);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Welcome to Blogpage</h1>
        </div>
        <div>
          <Button
            variant="contained"
            size="medium"
            onClick={() => navigate("/createBlog")}
          >
            Create Blog
          </Button>
        </div>
      </div>

      <div>
        <Home />
      </div>

      {/* <div>
        <BlogList />
      </div> */}

      {/* <div>
        <BarChart />
      </div> */}
    </div>
  );
}

export default Blogpage;
