import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'Player2',
    initialState: [],
    reducers: {

        planetAddedP2: (planetsLocation, action) => {
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

        coordinateComparedP2: (planetsLocation, action) => {
            return planetsLocation.map(planet => {
                if (planet.position === action.payload.position) {
                    return { ...planet, guessLocation: true };
                }
                return planet;
            });
        }
    }
});

export const { planetAddedP2, coordinateComparedP2 } = slice.actions;
export default slice.reducer;
