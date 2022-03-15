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
					{isDark ? 'Dark Theme' : 'Light Theme'}
				</p>
                <p>
                    Change your system theme and see the page change automatically!
                </p>
			</header>
		</div>
	);
}

export default App;
