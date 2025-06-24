import { atom } from 'jotai';

// Represents the main screen or view the user is currently looking at (e.g., diplomacy, economy).
export const currentScreenAtom = atom('main');

// Represents the paused state of the game simulation.
export const isPausedAtom = atom(false);

// Represents the in-game date.
export const gameDateAtom = atom('15 January 1836');
