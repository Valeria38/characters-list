import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'features/App';

import store from 'store';

import 'normalize.css';
import './styles.scss';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

/* eslint-disable no-undef */
ReactDOM.render(<Root />, document.querySelector('#root'));
