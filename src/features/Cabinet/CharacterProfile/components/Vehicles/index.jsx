import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getVehicles } from 'features/Cabinet/CharacterProfile/actions';

import { isUrl } from 'helpers/isUrl';

import { characterFields } from 'Constants';

const Vehicles = ({ vehicles }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    vehicles.length &&
      vehicles.every((item) => typeof item !== 'object' && isUrl(item)) &&
      dispatch(getVehicles(vehicles));
  }, [vehicles]);

  return (
    <div>
      {characterFields['vehicles']}:{' '}
      {vehicles.map(({ name, model }, index) => (
        <span key={name}>
          {name} ({model}){index < vehicles.length - 1 && ', '}
        </span>
      ))}
    </div>
  );
};

export default Vehicles;
