import { createSlice } from "@reduxjs/toolkit"

// const InitialState = {
//     username : '',
// }

const NameSlice = createSlice({
    name: 'user',
    initialState: {username: ''},
    reducers: {
        setuserName : (state, action) => {
            state.username = action.payload;            
        },
    },
});

export const {setuserName} = NameSlice.actions;
export const getName = (state) => state.user.username;
export default NameSlice.reducer;