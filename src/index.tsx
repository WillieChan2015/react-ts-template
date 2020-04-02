import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import './index.css';
import '@/assets/scss/reset.scss';

const renderMethod = (module as any).hot ? ReactDOM.render : ReactDOM.hydrate;
const render = (Component: any) => (
  renderMethod(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
);

render(App);

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
