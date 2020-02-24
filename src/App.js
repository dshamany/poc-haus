import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Browse from './components/Browse';
import Deals from './components/Deals';
import Businesses from './components/Businesses';
import Favorites from './components/Favorites'
import ProfilePage from './components/ProfilePage';
import About from './components/LandingAbout';

function App() {

	const [navItems] = useState([
		'home', 
		'browse', 
		'deals', 
		'businesses', 
		'favorites', 
		'about', 
		'signin'
	])

	return (
		<div className="App">
			{
				console.log(localStorage.getItem('token'))
			}
			<NavBar navItems={navItems} />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/browse" component={Browse} />
				<Route exact path="/deals" component={Deals} />
				<Route exact path="/businesses" component={Businesses} />
				<Route exact path="/favorites" component={Favorites} />
				<Route exact path="/about" component={About}/>
				<Route exact path="/account" component={LandingPage} />
				<Route exact path="/signin" component={SignIn} />
        		<Route exact path="/signup" component={SignUp} />
        		<Route exact path="/business" component={ProfilePage} />
			</Switch>
		</div>
	);
}

export default App;