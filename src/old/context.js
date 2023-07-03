import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';


const initialState = {

    users: [
        {id:1, name: 'Jayavishvaa', description: 'SDE-1', category: 'Sports'},
        {id:2, name: 'Jvishvaa', description: 'SDE', category: 'Entertainment'},
    ]
}

// Create context
export const BlogContext =createContext(initialState);
export const BlogDispatch = createContext(null)

// Provider Component
export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    //Actions
    const removeBlog = (id) => {
        dispatch({
            type: 'REMOVE_BLOG',
            payload: id
        })
    }

    const addBlog = (user) => {
        dispatch({
            type: 'ADD_BLOG',
            payload: user
        })
    }

    const editBlog = (user) => {
        dispatch({
            type: 'EDIT_BLOG',
            payload: user
        })
    }

    return (
        <BlogContext.Provider value={{ 
            users: state.users,
            removeBlog,
            addBlog,
            editBlog
        }}>
            {children}
        </BlogContext.Provider>
    )
}

