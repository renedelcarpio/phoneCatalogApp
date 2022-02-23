import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Phone from './Phone/Phone';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/:id' component={Phone} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
