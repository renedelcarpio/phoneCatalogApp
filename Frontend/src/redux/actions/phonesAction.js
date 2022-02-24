import types from '../types/types';

const setPhones = (data) => (dispatch) => {
	try {
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

const setOnePhone = (data) => (dispatch) => {
	try {
		dispatch({
			type: types.GET_ONE_PHONE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.toString();
		dispatch({
			type: types.GET_ONE_PHONE_FAILURE,
			payload: message,
		});
	}
};

export { setPhones, setOnePhone };
