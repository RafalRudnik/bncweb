import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const footerPl = 'projekt i wykonanie';
const footerGb = 'made and design by';
const bnc = '{BNC} Rafał Rudnik';

export default function Footer({ polish }) {
	const [currDate, setCurrDate] = useState('');

	function handleHomeLink(e) {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: { y: '#home', offsetY: 0 } });
	}

	useEffect(function () {
		const handleCurrentYear = () => {
			const year = new Date().getFullYear();
			setCurrDate(year);
		};
		handleCurrentYear();
	}, []);

	return (
		<footer className='footer'>
			<div className='footer__main'>
				<p>
					&copy; {currDate} {polish ? footerPl : footerGb}
				</p>
				<a href='https://rafal-rudnik.com/' target='_blank' rel='noreferrer'>
					{bnc}
				</a>
				<a href='#home' onClick={handleHomeLink}>
					<i class='ti ti-home-up'></i>
				</a>
			</div>
		</footer>
	);
}
