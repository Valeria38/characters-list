import { NavLink } from 'react-router-dom';

import { getRouteName } from 'helpers/getRouteName';

import './styles.scss';

const Character = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  vehicles,
  films,
}) => {
  return (
    <NavLink to={`/people/${getRouteName(name)}`}>
      <ul className="list-character">
        <li>name: {name}</li>
        <li>height: {height}</li>
        <li>mass: {mass}</li>
        <li>hair_color: {hair_color}</li>
        <li>skin_color: {skin_color}</li>
        <li>eye_color: {eye_color}</li>
        <li>birth_year: {birth_year}</li>
        <li>gender: {gender}</li>
        <li>homeworld: {homeworld}</li>
        <li>vehicles: {vehicles}</li>
        <li>films: {films}</li>
      </ul>
    </NavLink>
  );
};

export default Character;
