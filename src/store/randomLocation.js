import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'randomLocation',
    initialState: [],
    reducers: {
        locationAdded: (location, action) => {
            location.push({
                position: action.payload.position
            });
        }
    }
});

export const { locationAdded } = slice.actions;
export default slice.reducer;