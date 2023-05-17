import { PerkCollection } from '../../types/BetterPerksResponse';
import { LOAD_PERK_DATA } from './types';

export const loadPerkData = (perkData: PerkCollection) => ({
	type: LOAD_PERK_DATA,
	payload: perkData,
});