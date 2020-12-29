import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getSignInData } from 'features/SignIn/selectors';

import Heart from 'images/heart.svg';

import './styles.scss';

const Header = () => {
  const { name, email } = useSelector(getSignInData);
  return (
    <header className="header">
      <div className="header--container">
        {/* <div className="tooltip-wrapper">
          <span className="tooltip">Show the list of liked characters</span> */}
        {/* <Heart className="header--icon" /> */}
        {/* </div> */}
        <div className="header--userinfo">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
