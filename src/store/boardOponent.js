import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'boardOponent',
    initialState: [],
    reducers: {
        coordinateSelected: (planets, action) => {
            planets.push({
                id: ++lastId,
                position: action.payload.position,
                resolved: false
            });
        },
    }
});

export const { coordinateSelected } = slice.actions;
export default slice.reducer;
