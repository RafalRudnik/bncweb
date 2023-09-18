import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from './SectionHeading';

const contactPl = '{Kontakt}';
const contactGb = '{Contact}';
const contactTitleSpanPl = 'Zróbmy ';
const contactTitlePl = 'coś fajnego,';
const contactTitleTwoPl = 'zatrudnij mnie...';
const contactTitleSpanGb = 'Let`s ';
const contactTitleGb = 'do something cool,';
const contactTitleTwoGb = 'hire me...';
const mailtxt = 'BNC@RAFAL-RUDNIK.COM';

export default function ContactSection({ polish, mask }) {
	const darkMask = useRef(null);

	function mouseMask(e) {
		const { clientX, clientY } = e;
		const x = Math.round((clientX / window.innerWidth) * 100);
		const y = Math.round((clientY / window.innerHeight) * 100);

		gsap.to(darkMask.current, {
			'--x': `${x}%`,
			'--y': `${y}%`,
			duration: 0.3,
			ease: 'sine.out',
		});
	}

	useEffect(function () {
		window.addEventListener('mousemove', mouseMask);

		return function () {
			window.removeEventListener('mousemove', mouseMask);
		};
	}, []);

	return (
		<section className='contact' id='contact'>
			<div className='contact__main'>
				<div className='about__wrapper'>
					<SectionHeader>{polish ? contactPl : contactGb}</SectionHeader>
					<div className='contact__title'>
						<h2>
							<span>{polish ? contactTitleSpanPl : contactTitleSpanGb}</span>
							{polish ? contactTitlePl : contactTitleGb}
						</h2>
						<h2>{polish ? contactTitleTwoPl : contactTitleTwoGb}</h2>
					</div>
					<EmailInfo polish={polish} />
				</div>
			</div>
			<div
				className={`contact__main contact__main-dark ${mask ? 'full' : ''}`}
				ref={darkMask}>
				<div className='about__wrapper'>
					<SectionHeader>{polish ? contactPl : contactGb}</SectionHeader>
					<div className='contact__title'>
						<h2>
							<span>{polish ? contactTitleSpanPl : contactTitleSpanGb}</span>
							{polish ? contactTitlePl : contactTitleGb}
						</h2>
						<h2>{polish ? contactTitleTwoPl : contactTitleTwoGb}</h2>
					</div>
					<EmailInfo polish={polish} />
				</div>
			</div>
		</section>
	);
}

function EmailInfo({ polish }) {
	return (
		<div className='contact__info'>
			<div className='contact__info-img'>
				<img src='./img/Sesja_biz2.png' alt='Rafal R'></img>
			</div>
			<div className='contact__info-txt'>
				<p>{mailtxt}</p>
			</div>
		</div>
	);
}
