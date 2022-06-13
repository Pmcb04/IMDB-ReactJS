import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';

const App = ({ store }) => (
	<Provider store={store}>
		<div>
			<Home></Home>
		</div>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
