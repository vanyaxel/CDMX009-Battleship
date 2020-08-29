import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userAdded: (user, action) => {
            user.push({
                id: ++lastId,
                name: action.payload.name
            });
        }
    }
});

export const { userAdded } = slice.actions;
export default slice.reducer;