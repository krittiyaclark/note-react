import React from 'react';
// import { Route } from 'react-router-dom';

import Notes from './container/CreateNotes/CreateNotes';
import Layout from './components/Layout/Layout';

import './App.css';

const App = () => (
	<Layout>
		<Notes />
	</Layout>
);

export default App;
