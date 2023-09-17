import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
	const headRef = useRef(null);
	const headRefSecond = useRef(null);
	const byBnc = useRef(null);

	useEffect(function () {
		const elementOne = headRef.current;
		gsap.fromTo(
			elementOne,
			{
				y: 0,
			},
			{
				y: '+=800',
				duration: 5,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: elementOne,
					start: 40,
					end: 1000,
					scrub: true,
				},
			}
		);
	}, []);

	useEffect(function () {
		const elementTwo = headRefSecond.current;
		gsap.fromTo(
			elementTwo,
			{
				y: 0,
			},
			{
				y: '+=800',
				duration: 5,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: elementTwo,
					start: 90,
					end: 1200,
					scrub: true,
				},
			}
		);
	}, []);

	useEffect(function () {
		const elementThree = byBnc.current;
		gsap.fromTo(
			elementThree,
			{
				scale: 1,
			},
			{
				scale: 0,
				duration: 5,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: elementThree,
					start: 40,
					end: 200,
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className='header'>
			<div className='header__txt' ref={headRef}>
				<h1>
					<span>F</span>RONT
				</h1>
			</div>
			<div className='header__txt header__txt--two' ref={headRefSecond}>
				<h1>END</h1>
			</div>
			<div className='header__desc' ref={byBnc}>
				<p>
					By {'{'}
					<span>BNC</span>
					{'}'} Rafał Rudnik
				</p>
			</div>
			<div className='header__img'>
				<img src='./img/Sesja_biz.png' alt='Rafal Rudnik'></img>
			</div>
		</div>
	);
}
