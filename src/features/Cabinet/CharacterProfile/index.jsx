import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import Header from 'features/Cabinet/components/Header';
import Vehicles from 'features/Cabinet/CharacterProfile/components/Vehicles';
import Films from 'features/Cabinet/CharacterProfile/components/Films';
import Homeworld from 'features/Cabinet/CharacterProfile/components/Homeworld';

import { getCharacter as getCharacterSelector, getCharacterStatus } from 'features/Cabinet/CharacterProfile/selectors';

import { setIsLiked } from 'features/Cabinet/CharacterProfile/actions';

import Heart from 'images/heart.svg';
import OutlinedHeart from 'images/outlinedHeart.svg';

import { statuses, characterFields } from 'Constants';

import './styles.scss';

const CharacterProfile = () => {
  const dispatch = useDispatch();

  const character = useSelector(getCharacterSelector);
  const status = useSelector(getCharacterStatus);

  const isLikedStorage = !!localStorage.getItem(character.name);

  const renderDataJSX = (key, value) => {
    switch (key) {
      case 'name':
        return <h2>{value}</h2>;
      case 'vehicles':
        return <Vehicles vehicles={character.vehicles} />;
      case 'films':
        return <Films films={character.films} />;
      case 'homeworld':
        return <Homeworld homeworld={character.homeworld} name={character.name} />;
      default:
        return `${characterFields[key]}: ${value}`;
    }
  };

  const toggleLike = () => {
    dispatch(setIsLiked());
  };

  return (
    <div className="cabinet">
      <div className="shadow">
        <Header />
        {status === statuses.success ? (
          <div className="characters-profile">
            <div className="characters-profile-icon-wrapper" onClick={toggleLike}>
              {isLikedStorage ? (
                <Heart className={classNames('characters-profile--icon', { active: isLikedStorage })} />
              ) : (
                <OutlinedHeart className="characters-profile--icon" />
              )}
            </div>
            {Object.entries(character).map(([key, value]) =>
              value && value.length ? <div key={key}>{renderDataJSX(key, value)}</div> : null
            )}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default CharacterProfile;
