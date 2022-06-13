import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route path='/results' element={< Results />}></Route>
          </Routes>
       </Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
