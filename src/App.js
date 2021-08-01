import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const mediaQueryString = '(prefers-color-scheme: dark)';

function App() {
	const [isDark, setIsDark] = useState(
		() => window.matchMedia && window.matchMedia(mediaQueryString).matches
	);

	useEffect(() => {
		const mqList = window.matchMedia(mediaQueryString);
		const onChange = e => (e.matches ? setIsDark(true) : setIsDark(false));
		mqList.addEventListener('change', onChange);

		return () => mqList.removeEventListener('change', onChange);
	}, [setIsDark]);

	return (
		<div className='App'>
			<header className={isDark ? 'App-header' : 'App-header-light'}>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
