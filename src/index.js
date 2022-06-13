import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import configureStore from './redux/store';
import search from './redux/sagas/search';
const store = configureStore();

// ReactDOM.render(<App store={store} />, document.getElementById('root'));
ReactDOM.render(
        <App store={store} />,
    document.getElementById("root")
);
registerServiceWorker();

