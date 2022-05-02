import { createSlice } from "@reduxjs/toolkit";

const usersData = [
  {
    id: 1,
    name: "Elon musk",
    username: "Elon_00",
    age: 35
  },

  {
    id: 2,
    name: "Mark berg",
    username: "Mark_11",
    age: 40
  },
]


export const userSlice = createSlice({
  name: 'user',
  initialState: { value: usersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id)
    },
    updateUser: (state, action) => {
      const { userName } = action.payload
      const id = action.payload.id.id
      state.value.map( (user) => {
        if(user.id === parseInt(id)) {
          user.username = userName
        }
      })
    }
  }

})

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer
