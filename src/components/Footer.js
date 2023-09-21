import { useEffect, useState } from 'react';

const footerPl = 'projekt i wykonanie';
const footerGb = 'made and design by';
const bnc = '{BNC} Rafał Rudnik';

export default function Footer({ polish }) {
	const [currDate, setCurrDate] = useState('');

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
				<a href='#home' onclick="lenis.scrollTo('#home')">
					<i class='ti ti-home-up'></i>
				</a>
			</div>
		</footer>
	);
}
