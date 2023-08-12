import React from 'react';

import OtherProject from '../OtherProject/OtherProject';

import ship from '../images/other_projects/ship/1.jpeg';
import tank from '../images/other_projects/tank/1.jpg';
import saxonPistol from '../images/other_projects/saxonpistol/1.jpg';
import frenchFlintlock from '../images/other_projects/frenchflintlock/1.jpg';
import ak47 from '../images/other_projects/AK47/1.jpg';
import hand from '../images/other_projects/hand/1.jpeg';
import waterdrop from '../images/other_projects/waterdrop/1.jpeg';
import rain from '../images/other_projects/rain/1.jpeg';
import smoke from '../images/other_projects/smoke/smoke.jpeg';

const OtherProjects = ({ link }) => {
	const images = [
		ship,
		tank,
		saxonPistol,
		frenchFlintlock,
		ak47,
		hand,
		waterdrop,
		rain,
		smoke,
	];

	const texts = [
		'Ship',
		'Tank',
		'Saxon Pistol',
		'French Flintlock',
		'AK-47',
		'Hand',
		'Waterdrop',
		'Rain',
		'Smoke',
	];

	return (
		<>
			<h2 className="other-projects__title">Other Projects</h2>
			<div className="other-projects">
				{images.map((image, i) => {
					return (
						<OtherProject
							image={image}
							texts={texts}
							path={texts[i]}
							i={i}
						/>
					);
				})}
			</div>
		</>
	);
};

export default OtherProjects;
