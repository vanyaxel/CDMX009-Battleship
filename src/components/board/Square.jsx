import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { planetAdded } from '../../store/planets';

function Square({ props }) {
    const dispatch = useDispatch();
    /*     const planetsPlaced = useSelector(state => state.entities.planets); */

    const handleSelectPosition = (e) => {
        let coordinate = e.target.dataset.position;
        e.target.disabled = true;
        dispatch(planetAdded(({ coordinate: coordinate })));
    };

    return (
        <div>
            <Button variant="contained" color="default" data-position={props.position} onClick={handleSelectPosition}>
            </Button>
        </div>
    );
};

export default Square;
