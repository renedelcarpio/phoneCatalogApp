import types from '../types/types';

const initialState = {
	items: [],
	errorMessage: '',
};

const phonesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_PHONES_SUCCESS:
			return {
				...state,
				items: action.payload,
				errorMessage: '',
			};
		case types.GET_PHONES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default phonesReducer;
