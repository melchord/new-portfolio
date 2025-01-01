import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';

let store;

const initialState = {
	active: false,
	currentPreview: 'nextjs',
	lastUpdate: new Date(),
	light: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'tick':
			return {
				...state,
				lastUpdate: action.lastUpdate,
				light: !!action.light,
			};
		case 'update':
			return {
				...state,
				currentPreview: action.name,
			};
		case 'setActive':
			return {
				...state,
				active: action.active,
				currentPreview: action.currentPreview,
			};
		default:
			return state;
	}
};

const initStore = (preloadedState = initialState) => {
	return createStore(reducer, preloadedState);
};

export const initializeStore = (preloadedState) => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page iwth an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the sotre once in the client
	if (!store) store = _store;

	return _store;
};

export const useStore = (initialState) => {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}