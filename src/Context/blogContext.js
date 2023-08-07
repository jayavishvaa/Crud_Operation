import React, { createContext, useReducer } from "react";
// import AppReducer from './AppReducer';


const initialState = [
    // {id:1, name: 'Javishvaaay', description: 'SDE-1', category: 'Sports'},
    // {id:2, name: 'Jvishvaa', description: 'SDE', category: 'Entertainment'},
    // {id:3, name: 'Sharath', description: 'SDE', category: 'Education'},
    // {id:4, name: 'Girish', description: 'SDE', category: 'Entertainment'},
    // {id:5, name: 'Praneeth', description: 'SDE', category: 'Education'},
    // {id:6, name: 'Viney', description: 'SDE', category: 'Sports'},
    // {id:7, name: 'Pankaj', description: 'SDE', category: 'Entertainment'},
    // {id:8, name: 'Ashok', description: 'SDE', category: 'Sports'},
];

// Create context
export const BlogContext =createContext(null);
export const BlogDispatch = createContext(null)

// Provider Component
export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    return (
        <BlogContext.Provider value={state}>
            <BlogDispatch.Provider value={dispatch}>
                {children}
            </BlogDispatch.Provider>
        </BlogContext.Provider>
    )
}

function AppReducer(state,action) {
    
    switch(action.type) {

        case 'added': {
            return [...state, {
                id: action.id,
                name: action.name,
                description: action.description,
                category: action.category

            }];
        }

        case 'edited': {
            return state?.map((t) => {
                if (t.id === action.id) {
                    return {...t, name: action.name, description: action.description, category: action.category};
                } else {
                    return t
                }
            })
             
        }

        case 'deleted': {
            return state?.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}