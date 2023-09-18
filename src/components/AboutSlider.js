import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const headerOnePl = 'Projekt strony';
const headerOneGb = 'Website design';
const headerTwoPl = 'Kodowanie';
const headerTwoGb = 'Coding';
const headerThreePl = 'Gratulacje! Jesteś w sieci';
const headerThreeGb = 'Congratulations! You are online';
const slideOneTitleOnePl = 'Konsultacje';
const slideOneTitleOneGb = 'Consultations';
const slideOneDescOnePl =
	'Przeprowadzenie wywiadu, czego potrzebujesz jako firma, osoba prywatna. Do czego ma służyć Twoja strona internetowa. Jaka paleta kolorów pasuje do Ciebie, do Twojej działalności? Preferujesz dark mode, light mode czy może oba?';
const slideOneDescOneGb =
	'Conducting an interview on what you need as a company or an individual. What is your website intended for? What color palette suits you and your business? Do you prefer dark mode, light mode or both?';
const slideOneTitleTwoPl = 'Projekt';
const slideOneTitleTwoGb = 'Project';
const slideOneDescTwoPl =
	'Przygotowanie mockupu strony internetowej. Treść strony zawierającej słowa kluczowe SEO. Projekt animacji która nada życia całości.';
const slideOneDescTwoGb =
	'Preparing a website mockup. Page content containing SEO keywords. An animation project that will bring the whole thing to life.';
const slideOneTitleThreePl = 'Akceptacja';
const slideOneTitleThreeGb = 'Acceptance';
const slideOneDescThreePl =
	'Zaakceptuj projekt. Przemyślana strona internetowa może mieć ogromny wpływ na rozwój Twojej firmy.';
const slideOneDescThreeGb =
	'Accept the project. A well-thought-out website can have a huge impact on the development of your company.';

const slideTwoDescPl =
	'To tworzenia stron internetowych używam najnowszych technologii takich jak: JavaScript, HTML5, SASS, React, Framer Motion, Apple, VsCode, Node.js, Figma, Adobe.';

const sldieTwoDescGb =
	'To create websites, I use the latest technologies such as: JavaScript, HTML5, SASS, React, Framer Motion, Apple, VsCode, Node.js, Figma, Adobe.';

const slideThreeMainPl = 'www.TwojaStrona.pl';
const slideThreeMainGb = 'www.YourPage.com';
const slideThreeDescPl = 'Ciesz się swoim miejscem w sieci. Rób karierę,';
const slideThreeDescTwoPl = ' zarabiaj pieniądze';
const slideThreeDescGb = 'Enjoy your place on the web. Build a career,';
const slideThreeDescTwoGb = ' earn money';

export default function AboutSlider({ polish }) {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(function () {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: '-200vw',
				ease: 'none',
				duration: 4,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: 'top top',
					end: '2000 top',
					scrub: true,
					pin: true,
				},
			}
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<div className='about__scroll-outer'>
			<div ref={triggerRef}>
				<div ref={sectionRef} className='about__scroll-inner'>
					<div className='about__scroll-section'>
						<h2>{polish ? headerOnePl : headerOneGb}</h2>
						<div className='about__slideOne'>
							<div className='about__slideOne-header'>
								<h3>{polish ? slideOneTitleOnePl : slideOneTitleOneGb}</h3>
							</div>
							<div className='about__slideOne-desc'>
								<p>{polish ? slideOneDescOnePl : slideOneDescOneGb}</p>
							</div>
						</div>
						<div className='about__slideOne'>
							<div className='about__slideOne-header'>
								<h3>{polish ? slideOneTitleTwoPl : slideOneTitleTwoGb}</h3>
							</div>
							<div className='about__slideOne-desc'>
								<p>{polish ? slideOneDescTwoPl : slideOneDescTwoGb}</p>
							</div>
						</div>
						<div className='about__slideOne'>
							<div className='about__slideOne-header'>
								<h3>{polish ? slideOneTitleThreePl : slideOneTitleThreeGb}</h3>
							</div>
							<div className='about__slideOne-desc'>
								<p>{polish ? slideOneDescThreePl : slideOneDescThreeGb}</p>
							</div>
						</div>
					</div>
					<div className='about__scroll-section'>
						<h2>{polish ? headerTwoPl : headerTwoGb}</h2>
						<div className='about__slideTwo-main'>
							<div className='about__slideTwo-desc'>
								<p>{polish ? slideTwoDescPl : sldieTwoDescGb}</p>
							</div>
							<div className='about__slideTwo-img'>
								<div className='about__slideTwo-img--icons'>
									<img src='./img/Icon1.png' alt='html icon'></img>
									<img src='./img/Icon2.png' alt='javascript icon'></img>
									<img src='./img/Icon3.png' alt='react icon'></img>
									<img src='./img/Icon4.png' alt='sass icon'></img>
								</div>
								<div className='about__slideTwo-img--code'>
									<img src='./img/code.png' alt='vscode screenshot'></img>
								</div>
							</div>
						</div>
					</div>
					<div className='about__scroll-section'>
						<h2>{polish ? headerThreePl : headerThreeGb}</h2>
						<div className='about__slideThree-main'>
							<p>
								<span>{'['}</span>
								{polish ? slideThreeMainPl : slideThreeMainGb}
								<span>{']'}</span>
							</p>
						</div>
						<div className='about__slideThree-desc'>
							<p>
								{polish ? slideThreeDescPl : slideThreeDescGb}
								<span>
									{polish ? slideThreeDescTwoPl : slideThreeDescTwoGb}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
