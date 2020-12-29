import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getCharacter as getCurrentCharacter } from 'features/Cabinet/CharacterProfile/actions';

import Homeworld from 'features/Cabinet/CharactersList/components/Homeworld';

import { getRouteName } from 'helpers/getRouteName';

import './styles.scss';

const Character = ({ name, gender, homeworld, url }) => {
  const dispatch = useDispatch();

  const fields = { name, gender, homeworld };

  const getCharacter = () => dispatch(getCurrentCharacter(url));

  const renderDataJSX = (key, value) => {
    switch (key) {
      case 'homeworld':
        return <Homeworld homeworld={homeworld} name={name} />;
      default:
        return `${key}: ${value}`;
    }
  };

  return (
    <NavLink onClick={getCharacter} className="list-character" to={`/people/${getRouteName(name)}`}>
      {Object.entries(fields).map(([key, value]) => {
        return <div key={key}>{renderDataJSX(key, value)}</div>;
      })}
    </NavLink>
  );
};

export default memo(Character);
