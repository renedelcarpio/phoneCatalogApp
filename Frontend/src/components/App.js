import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import HomePage from './HomePage/HomePage';
import PhoneDetail from './PhoneDetail/PhoneDetail';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/:id' component={PhoneDetail} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
