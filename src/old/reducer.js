export default (state, action) => {

    switch(action.type) {

        // case 'REMOVE_BLOG':
        //     return {
        //         users: state.users.filter(user => {
        //             return user.id !== action.payload
        //         })
        //     }
        case 'ADD_BLOG':
            return {
                users: [action.payload, ...state.users]
            }
        case 'EDIT_BLOG':
            const updateUser = action.payload;
            
            const updateUsers = state.users.map(user => {
                if (user.id === updateUser.id) {
                    return updateUser
                }
                return user
            })

            return {
                users: updateUsers
            }

        default:
            return state
    }
}