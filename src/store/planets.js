import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'planets',
    initialState: [],
    reducers: {
        planetAdded: (planets, action) => {
            if (planets.length < 10) {
                planets.push({
                    id: ++lastId,
                    position: action.payload.position,
                    guessLocation: false
                });
            } else {
                return planets;
            }
        },

        planetRemoved: (planets, action) => {
            return planets.filter(planet => planet.position !== action.payload.position);
        },

        coordinateCompared: (planets, action) => {
            return planets.map(planet => {
                if (planet.position === action.payload.position) {
                    return (planet.guessLocation = true);
                } else {
                    return planets;
                }
            });
        }
    }
});

export const { planetAdded, planetRemoved, coordinateCompared } = slice.actions;
export default slice.reducer;
