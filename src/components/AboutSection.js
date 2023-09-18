import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeading';
import AboutSlider from './AboutSlider';

gsap.registerPlugin(ScrollTrigger);

const workPl = '{O nas}';
const workGb = '{About}';
const headerDevelopPl = 'Tworzenie i';
const headerDevelopGb = 'Website';
const headerDesignPl = 'projektowanie';
const headerDesignGb = 'creation';
const headerWebPl = 'stron internetowych';
const headerWebGb = 'and design';
const headerDescOnePl =
	'Zajmujemy się profesjonalnym projektowaniem i wykonaniem responsywnych stron internetowych z zachowaniem zasady mobile-first. Swoim klientom dajemy szansę dotarcia do większej rzeszy odbiorców. Zareklamowania siebie i swojej firmy w internecie poprzez unikalny, nowoczesny projekt.';
const headerDescOneGb =
	'We deal with professional design and implementation of responsive websites websites with the mobile-first principle. We give our clients a chance reaching a larger audience. Advertise yourself and your business in online through a unique, modern design.';

const engagementPl = 'Zaangażowanie';
const engagementGb = 'Engagement';

const engagementDescPl =
	'W każdy projekt wkładamy czas i pasję. Każdy projekt jest dopracowany, liczy się każdy szczegół. Oferujemy pełne wsparcie, od projektu poprzez wykonanie i późniejszą obsługę. Aktualizacje treści, design, hosting etc.';
const engagementDescGb =
	'We put time and passion into each project. Every project is refined, it counts every detail. We offer full support, from design through execution and subsequent service. Content updates, design, hosting, etc.';

const howPl = 'Jak';
const howGb = 'How';
const howDescPl = 'stworzyć';
const howDescGb = 'to create';
const howWebPl = 'stronę internetową?';
const howWebGb = 'a website?';

const aboutBlackTitlePl = 'Klienci kupują';
const aboutBlackTitleTwoPl = 'oczami...';
const aboutBlackTitleGb = 'Customers buy with';
const aboutBlackTitleTwoGb = 'their eyes...';

const aboutBlackMainPl =
	'Według badań odwiedzający strony nie czytają nadmiaru treści.';
const aboutBlackMainGb =
	'According to research, website visitors do not read excessive content.';

const aboutBlackDescPl =
	'Strony przeładowane treścią i nadmiarem szczegółów dotyczących oferty, nie są czytane przez odwiedzających. Wg. badań odwiedzający strony koncentrują się na nagłówkach i oprawie wizualnej. ';

const aboutBlackDescGb =
	'Pages overloaded with content and too many details about the offer are not read by visitors. According to research, website visitors focus on headings and visuals.';

export default function AboutSection({ polish }) {
	return (
		<section className='about' id='about'>
			<AboutMain polish={polish} />
			<AboutBlackSection polish={polish} />
		</section>
	);
}

function AboutMain({ polish }) {

	return (
		<div className='about__main'>
			<div className='about__wrapper'>
				<SectionHeader>{polish ? workPl : workGb}</SectionHeader>
				<AboutTxtBlock>
					<h2>
						{polish ? headerDevelopPl : headerDevelopGb}{' '}
						<span>{polish ? headerDesignPl : headerDesignGb}</span>
					</h2>
					<h2>{polish ? headerWebPl : headerWebGb}</h2>
					<AboutTxtDesc>
						{polish ? headerDescOnePl : headerDescOneGb}
					</AboutTxtDesc>
				</AboutTxtBlock>
				<AboutTxtBlock>
					<h2>
						<span>{polish ? engagementPl : engagementGb}</span>
					</h2>
					<AboutTxtDesc>
						{polish ? engagementDescPl : engagementDescGb}
					</AboutTxtDesc>
				</AboutTxtBlock>
				<AboutTxtBlock>
					<h2>
						<span>{polish ? howPl : howGb} </span>
						{polish ? howDescPl : howDescGb}
					</h2>
					<h2>{polish ? howWebPl : howWebGb}</h2>
				</AboutTxtBlock>
				<AboutSlider polish={polish} />
			</div>
		</div>
	);
}

function AboutTxtBlock({ children }) {
	const titleOne = useRef(null);

	useEffect(function () {
		const fristTitle = titleOne.current;
		gsap.fromTo(
			fristTitle.children,
			{
				y: '+=100',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.3,
				ease: 'none',
				scrollTrigger: {
					trigger: fristTitle,
					start: 'top 80%',
					end: 'top 50%',
				},
			}
		);
	}, []);
	return (
		<div className='about__title' ref={titleOne}>
			{children}
		</div>
	);
}

function AboutTxtDesc({ children }) {
	return (
		<div className='about__desc'>
			<p>{children}</p>
		</div>
	);
}

function AboutBlackSection({ polish }) {
	return (
		<div className='about__blackSection'>
			<div className='about__wrapper'>
				<AboutTxtBlock>
					<h2>{polish ? aboutBlackTitlePl : aboutBlackTitleGb}</h2>
					<h2>{polish ? aboutBlackTitleTwoPl : aboutBlackTitleTwoGb}</h2>
				</AboutTxtBlock>
				<div className='about__blackSection-main'>
					<h3>{polish ? aboutBlackMainPl : aboutBlackMainGb}</h3>
					<div className='about__blackSection-main--img'>
						<img src='./img/eye.jpg' alt='eye'></img>
					</div>
				</div>
				<div className='about__blackSection-desc'>
					<p>{polish ? aboutBlackDescPl : aboutBlackDescGb}</p>
				</div>
			</div>
		</div>
	);
}
