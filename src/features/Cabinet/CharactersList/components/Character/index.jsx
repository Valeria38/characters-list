import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { getCharacter as getCurrentCharacter } from 'features/Cabinet/CharacterProfile/actions';
import { setIsLiked } from 'features/Cabinet/actions';

import Homeworld from 'features/Cabinet/CharactersList/components/Homeworld';

import { getRouteName } from 'helpers/getRouteName';

import Heart from 'images/heart.svg';
import OutlinedHeart from 'images/outlinedHeart.svg';

import './styles.scss';

const Character = ({ name, gender, homeworld, url, isLiked }) => {
  const dispatch = useDispatch();
  const fields = { name, gender, homeworld };

  const isLikedStorage = !!localStorage.getItem(name);

  const getCharacter = () => dispatch(getCurrentCharacter(url));

  const renderDataJSX = (key, value) => {
    switch (key) {
      case 'homeworld':
        return <Homeworld homeworld={homeworld} name={name} />;
      default:
        return `${key}: ${value}`;
    }
  };

  const toggleLike = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(setIsLiked(name));
  };

  return (
    <NavLink onClick={getCharacter} className="list-character" to={`/people/${getRouteName(name)}`}>
      <div className="list-character-icon-wrapper" onClick={toggleLike}>
        {isLikedStorage ? (
          <Heart className={classNames('list-character--icon', { active: isLikedStorage })} />
        ) : (
          <OutlinedHeart className="list-character--icon" />
        )}
      </div>
      {Object.entries(fields).map(([key, value]) => {
        return <div key={key}>{renderDataJSX(key, value)}</div>;
      })}
    </NavLink>
  );
};

export default memo(Character);
