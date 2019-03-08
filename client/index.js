import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {Provider} from 'react-redux';

// Import Routes
import routes from './routes';

// Import store
import store from './store/store';

const JSX =() => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {
          renderRoutes(routes)
        }
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(JSX(), document.getElementById('root'))
