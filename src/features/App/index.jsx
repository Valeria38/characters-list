import { Switch, Route } from 'react-router-dom';

import SignIn from 'features/SignIn';
import Cabinet from 'features/Cabinet';
import NotFound from 'common/NotFound';
import ProtectedRoute from 'common/ProtectedRoute';

const App = () => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <ProtectedRoute exact path="/cabinet" component={Cabinet} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
