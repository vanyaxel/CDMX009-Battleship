import { createSlice, createSelector } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'planets',
    initialState: [],
    reducers: {
        planetAdded: (planets, action) => {
            console.log(planets, action);
            if (planets.length < 10) {
                planets.push({
                    id: ++lastId,
                    coordinate: action.payload.coordinate,
                    guessLocation: false
                });
            } else {
                return planets;
            }
        },

        planetRemoved: (planets, action) => {
            planets.filter(planet => planet.id !== action.payload.id);
        },

        coordinateCompared: (planets, action) => {
            planets.map(planet => {
                if (planet.position === action.payload.position) {
                    planet.guessLocation = true;
                    console.log('atinaste');
                } else {
                    console.log('fallaste');
                }
            });
        }
    }
});

export const { planetAdded, planetRemoved, coordinateCompared } = slice.actions;
export default slice.reducer;

export const getPlanetSelected = createSelector(
    state => state.entities.planets,
);