import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getHomeworld } from 'features/Cabinet/actions';

import { isUrl } from 'helpers/isUrl';

import { characterFields } from 'Constants';

const Homeworld = ({ homeworld, name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    homeworld && isUrl(homeworld) && dispatch(getHomeworld(homeworld, name));
  }, [homeworld, name]);

  return (
    <div>
      {characterFields['homeworld']}: {homeworld}
    </div>
  );
};

export default Homeworld;
