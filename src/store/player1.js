import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
let counter = 0;

const slice = createSlice({
    name: 'Player1',
    initialState: [],
    reducers: {

        planetAddedP1: (planetsLocation, action) => {
            if (planetsLocation.length < 10) {
                planetsLocation.push({
                    id: ++lastId,
                    position: action.payload.position,
                    guessLocation: false
                });
            } else {
                console.log('ya no puedes guardar mas ubicaciones');
                return planetsLocation;
            }
        },

        planetRemovedP1: (planetsLocation, action) => {
            return planetsLocation.filter(planet => planet.position !== action.payload.position);
        },

        coordinateComparedP1: (planetsLocation, action) => {
            return planetsLocation.map(planet => {
                if (planet.position === action.payload.position) {
                    return { ...planet, guessLocation: true };
                }
                return planet;
            });
        }
        /* coordinateComparedP1: (planetsLocation, action) => {
            return planetsLocation.map(planet => {
                if (planet.position === action.payload.position) {
                    return (planet.guessLocation = true);
                } else {
                    return planetsLocation;
                }
            });
        }, */
    }
});

export const { planetAddedP1, planetRemovedP1, coordinateComparedP1 } = slice.actions;
export default slice.reducer;
