import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const workPl = '{Praca}';
const workGb = '{Work}';
const aboutPl = '{O nas}';
const aboutGb = '{About}';
const contactPl = '{Kontakt}';
const contactGb = '{Contact}';

export default function Menu({ polish }) {
	function handleAboutLink(e) {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: { y: '#about', offsetY: 0 } });
	}

	function handleWorkLink(e) {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: { y: '#work', offsetY: 100 } });
	}
	function handleContactLink(e) {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: { y: '#contact', offsetY: 0 } });
	}

	return (
		<div className='menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<a href='#about' onClick={handleAboutLink}>
						{polish ? aboutPl : aboutGb}
					</a>
					<a href='#work' onClick={handleWorkLink}>
						{polish ? workPl : workGb}
					</a>
					<a href='#contact' onClick={handleContactLink}>
						{polish ? contactPl : contactGb}
					</a>
				</li>
			</ul>
		</div>
	);
}
