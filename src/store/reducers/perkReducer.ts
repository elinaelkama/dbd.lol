import { PerkCollection } from '../../types/BetterPerksResponse';
import { LOAD_PERK_DATA } from '../actions/types';

export interface PerkState {
	data: PerkCollection;
}

const initialState: PerkState = {
	data: {},
}

const perkReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOAD_PERK_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default perkReducer;