import {createSlice} from '@reduxjs/toolkit'

const  initialState = {
    name:  'HR Akash',
    email:  'hrakash@gmail.com',
    userTask: []
}

const userSlice  = createSlice({
    name:  'userSlice',
    initialState,
    reducers: {}
})

export default userSlice.reducer;