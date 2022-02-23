import types from '../types/types';

const initialState = {
	isLoading: false,
	items: [],
	errorMessage: '',
};

const phonesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_PHONES_SUCCESS:
			return {
				...state,
				isLoading: false,
				items: action.payload,
				errorMessage: '',
			};
		case types.GET_PHONES_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};
	}
};
