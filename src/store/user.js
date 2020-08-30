import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userAdded: (user, action) => {
            user.push({
                name: action.payload.name
            });
        }
    }
});

export const { userAdded } = slice.actions;
export default slice.reducer;