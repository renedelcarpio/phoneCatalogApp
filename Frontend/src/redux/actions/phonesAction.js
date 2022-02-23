import types from '../types/types';
import axios from 'axios';
import constant from '../../constants/constant';

const getPhones = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${constant.API_URL}/phones`);
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
