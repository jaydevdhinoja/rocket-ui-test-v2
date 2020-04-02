import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import "styles/_style.sass"  // Css-module styles

import LauncheCollectionProvider from './services/LaunchCollectionProvider';
import {AppContainer} from 'react-hot-loader'


const renderApp = (Component) => {
    ReactDOM.render(
      <LauncheCollectionProvider>
        <AppContainer>
          <Component/>
        </AppContainer>
      </LauncheCollectionProvider>,
      document.getElementById('app')
    );
  };
  
  renderApp(Routes);
  

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
      renderApp(require('./routes').default);
    })
  }

