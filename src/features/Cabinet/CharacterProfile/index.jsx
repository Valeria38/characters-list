import { useSelector } from 'react-redux';

import Header from 'features/Cabinet/components/Header';
import Vehicles from 'features/Cabinet/CharacterProfile/components/Vehicles';
import Films from 'features/Cabinet/CharacterProfile/components/Films';
import Homeworld from 'features/Cabinet/CharacterProfile/components/Homeworld';

import { getCharacter as getCharacterSelector, getCharacterStatus } from 'features/Cabinet/CharacterProfile/selectors';

import './styles.scss';
import { statuses, characterFields } from 'Constants';

const CharacterProfile = () => {
  const character = useSelector(getCharacterSelector);
  const status = useSelector(getCharacterStatus);

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

  return (
    <div className="cabinet">
      <div className="shadow">
        <Header />
        {status === statuses.success ? (
          <div className="characters-profile">
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
