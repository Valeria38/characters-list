import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { getSignInStatus } from 'features/SignIn/selectors';

import { setSignInData } from 'features/SignIn/actions';

import './styles.scss';

const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getSignInStatus);

  const responseFacebook = (response) => {
    // console.log(response);
    dispatch(setSignInData(response));
  };

  useEffect(() => {
    isSignedIn && history.push('/people');
  }, [isSignedIn]);

  return (
    <div className="signin-bg">
      <div className="signin-container">
        <div className="signin">
          <h3 className="signin--title">Facebook Authentication</h3>
          <FacebookLogin
            appId="323026485491711"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="signin--btn"
            icon="fa fa-facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
