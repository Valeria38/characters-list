import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getFilms } from 'features/Cabinet/CharacterProfile/actions';

import { isUrl } from 'helpers/isUrl';

import { characterFields } from 'Constants';

const Films = ({ films }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    films.length && films.every((item) => typeof item !== 'object' && isUrl(item)) && dispatch(getFilms(films));
  }, [films]);

  return (
    <div>
      {characterFields['films']}: {films.map(({ title }) => title).join(', ')}
    </div>
  );
};

export default Films;
