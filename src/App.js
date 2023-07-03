import React from 'react';
//pages
import Blogpage from './Blog/blogPage';
import CreateBlog from './Blog/createBlog';
import BlogList from './Blog/blogList';
import EditBlog from './Blog/editBlog';
import EditPage from './Blog/editPage';
//Context
import { BlogProvider } from './Context/blogContext';
//React router dom
import { createBrowserRouter, 
         createRoutesFromElements, 
         Route, 
         RouterProvider, 
         Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Blogpage/>}/>
      <Route path="/createBlog" element={<CreateBlog/>}/>
      <Route path='/blogList' element={<BlogList/>} />
      <Route path='/editBlog/:id' element={<EditPage/>} />
    </Route>
  )
)

function App() {
  return (
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  );
}

export default App;
