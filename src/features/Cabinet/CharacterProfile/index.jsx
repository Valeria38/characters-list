import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacter } from 'features/Cabinet/actions';
import { getCharacter as getCharacterSelector, getCharacterStatus } from 'features/Cabinet/selectors';

import { getFirstName } from 'helpers/getFirstName';

import './styles.scss';
import { statuses } from 'Constants';

const CharacterProfile = ({ location: { pathname } }) => {
  const dispatch = useDispatch();
  const {
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
  } = useSelector(getCharacterSelector);
  const status = useSelector(getCharacterStatus);

  useEffect(() => {
    dispatch(getCharacter(getFirstName(pathname)));
  }, []);

  return status === statuses.success ? (
    <div className="characters-profile">
      <div>Profile page</div>
      <div>name: {name}</div>
      <div>height: {height}</div>
      <div>mass: {mass}</div>
      <div>hair_color: {hair_color}</div>
      <div>skin_color: {skin_color}</div>
      <div>eye_color: {eye_color}</div>
      <div>birth_year: {birth_year}</div>
      <div>gender: {gender}</div>
      <div>homeworld: {homeworld}</div>
      <div>vehicles: {vehicles}</div>
      <div>films: {films}</div>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default CharacterProfile;
