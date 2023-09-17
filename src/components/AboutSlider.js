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
				translateX: '-2400',
				ease: 'none',
				duration: 1,
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
					</div>
					<div className='about__scroll-section'>
						<h2>{polish ? headerThreePl : headerThreeGb}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
