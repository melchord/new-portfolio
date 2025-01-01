import { useSelector } from 'react-redux';

import { Layout } from '../components';

import styles from '../styles/Home.module.scss';

const Component = () => {
	const isActive  = useSelector(state => state.active);
	const currentPreview = useSelector ((state) => state.currentPreview);

	const githubLink = <a href='https://github.com/melchord>'>Github</a>;
	return (
		<Layout tityle='Melchor Dominguez'>
			<div className={styles.title}>
				Melchor Dominguez
			</div>
			<img src='/owl.gif' />
			<br />;
		</Layout>
	);
};

Component.displayName = 'Home';

export default Component;