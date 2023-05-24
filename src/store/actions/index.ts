import { CharacterCollection } from '../../types/CharacterCollection';
import { PerkCollection } from '../../types/PerkCollection';
import { LOAD_CHARACTER_DATA, LOAD_PERK_DATA } from './types';

export const loadPerkData = (perkData: PerkCollection) => ({
	type: LOAD_PERK_DATA,
	payload: perkData,
});

export const loadCharacterData = (characterData: CharacterCollection) => ({
	type: LOAD_CHARACTER_DATA,
	payload: characterData,
});