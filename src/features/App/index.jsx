import { Switch, Route } from 'react-router-dom';

import SignIn from 'features/SignIn';
import Cabinet from 'features/Cabinet';
import NotFound from 'common/NotFound';
import ProtectedRoute from 'common/ProtectedRoute';
import CharacterProfile from 'features/Cabinet/CharacterProfile';

const App = () => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <ProtectedRoute exact path="/people" component={Cabinet} />
      <ProtectedRoute exact path="/people/:name" component={CharacterProfile} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
