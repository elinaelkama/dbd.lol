import { CharacterCollection } from '../../types/CharacterCollection';
import { LOAD_CHARACTER_DATA } from '../actions/types';

export interface CharacterState {
	data: CharacterCollection;
}

const initialState: CharacterState = {
	data: {},
}

const characterReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOAD_CHARACTER_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default characterReducer;