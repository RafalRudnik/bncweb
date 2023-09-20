import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const workPl = [
	'{Praca}',
	'Indywidualne podejście',
	'Indywidualne podejście zapewnia klientowi unikalny design ',
	'Dbałość o detale',
	'Zależy mi na tym, aby klient był w pełni zadowolony z wykonanej przez nas usługi. Nie ma znaczenia czy zlecenie jest duże, czy małe ',
	'Indywidualne podejście',
	'Indywidualne podejście zapewnia klientowi unikalny design ',
];
const workGb = [
	'{Work}',
	'Individual approach',
	'An individual approach provides the client with a unique design ',
	'Attention to details',
	'It is important to me that the client is fully satisfied with the service we provide. It doesn`t matter whether the order is large or small ',
	'Individual approach',
	'An individual approach provides the client with a unique design ',
];

export default function WorkSection({ polish }) {
	return (
		<section className='work' id='work'>
			<div className='about__wrapper'>
				<SectionHeader>{polish ? workPl[0] : workGb[0]}</SectionHeader>
			</div>
			<WorkSlides
				polish={polish}
				classOne='work__sliderOne'
				titleTxtPl={workPl[1]}
				titleTxtGb={workGb[1]}
				slideTxtPl={workPl[2]}
				slideTxtGb={workGb[2]}
			/>
			<WorkSlides
				polish={polish}
				classTwo='work__sliderTwo'
				titleTxtPl={workPl[3]}
				titleTxtGb={workGb[3]}
				slideTxtPl={workPl[4]}
				slideTxtGb={workGb[4]}
			/>
			<WorkSlides
				polish={polish}
				classThree='work__sliderThree'
				titleTxtPl={workPl[5]}
				titleTxtGb={workGb[5]}
				slideTxtPl={workPl[6]}
				slideTxtGb={workGb[6]}
			/>
			<WorkParalax polis={polish} />
		</section>
	);
}

function WorkSlides({
	polish,
	titleTxtPl,
	titleTxtGb,
	slideTxtPl,
	slideTxtGb,
	classOne,
	classTwo,
	classThree,
}) {
	return (
		<div className={`work__slider ${classOne} ${classTwo} ${classThree}`}>
			<div className='about__wrapper work__title'>
				<p>{polish ? titleTxtPl : titleTxtGb}</p>
			</div>
			<div className='work__slider-slide'>
				<div className='work__slider-slide-one'>
					<p>{polish ? slideTxtPl : slideTxtGb}</p>
				</div>
				<div className='work__slider-slide-two'>
					<p>{polish ? slideTxtPl : slideTxtGb}</p>
				</div>
			</div>
		</div>
	);
}

function WorkParalax({ polish }) {
	const slideLeft = useRef(null);
	const slideMiddle = useRef(null);
	const slideRight = useRef(null);
	const mainSlide = useRef(null);

	useEffect(function () {
		gsap.fromTo(
			slideMiddle.current,
			{
				y: 0,
			},
			{
				y: '-=200',
				duration: 20,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: mainSlide.current,
					start: 'top 80%',
					end: 'bottom -2000',
					scrub: true,
				},
			}
		);
	}, []);
	useEffect(function () {
		gsap.fromTo(
			slideLeft.current,
			{
				y: '-=700',
			},
			{
				y: '+=900',
				duration: 20,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: mainSlide.current,
					start: 'top 100%',
					end: 'bottom -600',
					scrub: true,
				},
			}
		);
	}, []);
	useEffect(function () {
		if (window.innerWidth > 992) {
			gsap.fromTo(
				slideRight.current,
				{
					y: '-=300',
				},
				{
					y: '+=600',
					duration: 10,
					ease: 'easeInOut',
					scrollTrigger: {
						trigger: mainSlide.current,
						start: 'top 90%',
						end: 'bottom -1200',
						scrub: true,
					},
				}
			);
		} else {
			gsap.fromTo(
				slideRight.current,
				{
					y: '-=400',
				},
				{
					y: '+=900',
					duration: 10,
					ease: 'easeInOut',
					scrollTrigger: {
						trigger: mainSlide.current,
						start: 'top 90%',
						end: 'bottom -1200',
						scrub: true,
					},
				}
			);
		}
	}, []);

	return (
		<div className='work__paralax' ref={mainSlide}>
			<div className='work__paralax-one' ref={slideLeft}>
				<div className='work__img'>
					<img src='./img/01-01.png' alt='work example'></img>
				</div>
				<div className='work__img'>
					<img src='./img/01-02.png' alt='work example'></img>
				</div>
			</div>
			<div className='work__paralax-two' ref={slideMiddle}>
				<div className='work__img'>
					<img src='./img/02-01.png' alt='work example'></img>
				</div>
				<div className='work__img'>
					<img src='./img/02-02.png' alt='work example'></img>
				</div>
				<div className='work__img'>
					<img src='./img/02-03.png' alt='work example'></img>
				</div>
			</div>
			<div className='work__paralax-three' ref={slideRight}>
				<div className='work__img'>
					<img src='./img/03-03.png' alt='work example'></img>
				</div>
				<div className='work__img'>
					<img src='./img/03-01.png' alt='work example'></img>
				</div>
				<div className='work__img'>
					<img src='./img/03-02.png' alt='work example'></img>
				</div>
			</div>
		</div>
	);
}
