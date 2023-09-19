import { useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Menu from './Menu';
import Header from './Header';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import WorkSection from './WorkSection';

function App() {
	const [polish, setPolish] = useState(true);
	const [light, setLight] = useState(true);
	const [mask, setMask] = useState(false);

	function handleDarkMode() {
		setLight((light) => !light);
		setMask((mask) => !mask);
	}

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
	requestAnimationFrame(raf);

	function handleLanguage() {
		setPolish((polish) => !polish);
	}

	return (
		<div className='app'>
			<Navbar handleLanguage={handleLanguage} />
			<Menu polish={polish} />
			<Header />
			<AboutSection
				polish={polish}
				light={light}
				handleDarkMode={handleDarkMode}
			/>
			<WorkSection polish={polish} />
			<ContactSection polish={polish} mask={mask} />
		</div>
	);
}

export default App;
