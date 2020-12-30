import CharactersList from 'features/Cabinet/CharactersList';
import Autocomplete from 'features/Cabinet/Autocomplete';
import Header from 'features/Cabinet/components/Header';

import './styles.scss';

const Cabinet = () => (
  <div className="cabinet">
    <div className="shadow">
      <Header />
      <Autocomplete />
      <CharactersList />
    </div>
  </div>
);

export default Cabinet;
