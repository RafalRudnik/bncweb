import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeading';

const workPl = [
	'{Praca}',
	'Indywidualne podejście',
	'Indywidualne podejście zapewnia klientowi unikalny design ',
	'Indywidualne podejście',
	'Indywidualne podejście zapewnia klientowi unikalny design ',
	'Indywidualne podejście',
	'Indywidualne podejście zapewnia klientowi unikalny design ',
];
const workGb = [
	'{Work}',
	'Individual approach',
	'An individual approach provides the client with a unique design ',
	'Individual approach',
	'An individual approach provides the client with a unique design ',
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
				titleTxtPl={workPl[1]}
				titleTxtGb={workGb[1]}
				slideTxtPl={workPl[2]}
				slideTxtGb={workGb[2]}
			/>
			<WorkSlides
				polish={polish}
				classThree='work__sliderThree'
				titleTxtPl={workPl[1]}
				titleTxtGb={workGb[1]}
				slideTxtPl={workPl[2]}
				slideTxtGb={workGb[2]}
			/>
		</section>
	);
}

function WorkSlides({
	polish,
	titleTxtPl,
	titleTxtGb,
	slideTxtPl,
	slideTxtGb,
	slideTxtTwoPl,
	slideTxtTwoGb,
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
