import { useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Menu from './Menu';
import Header from './Header';
import AboutSection from './AboutSection';

function App() {
	const [polish, setPolish] = useState(true);

	// if (window.innerWidth > 992) {
	// 	const lenis = new Lenis({
	// 		// syncTouch: true,
	// 		// smoothToch: true,
	// 	});

	// 	lenis.on('scroll', (e) => {
	// 		console.log(e);
	// 	});

	// 	function raf(time) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}

	// 	requestAnimationFrame(raf);
	// }

	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	function handleLanguage() {
		setPolish((polish) => !polish);
	}

	requestAnimationFrame(raf);

	return (
		<div className='app'>
			<Navbar handleLanguage={handleLanguage} />
			<Menu polish={polish} />
			<Header />
			<AboutSection polish={polish}/>
		</div>
	);
}

export default App;
