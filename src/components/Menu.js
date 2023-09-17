const workPl = '{Praca}';
const workGb = '{Work}';
const aboutPl = '{O nas}';
const aboutGb = '{About}';
const contactPl = '{Kontakt}';
const contactGb = '{Contact}';

export default function Menu({ polish }) {
	return (
		<div className='menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<a href='#about' onclick="lenis.scrollTo('#about')">
						{polish ? aboutPl : aboutGb}
					</a>
					<a href='#work'>{polish ? workPl : workGb}</a>
					<a href='#contact'>{polish ? contactPl : contactGb}</a>
				</li>
			</ul>
		</div>
	);
}
