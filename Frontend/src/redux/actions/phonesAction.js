import types from '../types/types';
import axios from 'axios';

const getPhones = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`http://localhost:5000/phones`);
		console.log(data);
		dispatch({
			type: types.GET_PHONES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.toString();
		dispatch({
			type: types.GET_PHONES_FAILURE,
			payload: message,
		});
	}
};

export { getPhones };
