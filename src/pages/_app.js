import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { useStore } from '../store';

import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

App.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};