import { FC } from 'react';

import OtherProject from 'components/OtherProject/OtherProject';

import ship from 'assets/images/other_projects/ship/1.jpeg';
import tank from 'assets/images/other_projects/tank/1.jpg';
import saxonPistol from 'assets/images/other_projects/saxonpistol/1.jpg';
import frenchFlintlock from 'assets/images/other_projects/frenchflintlock/1.jpg';
import ak47 from 'assets/images/other_projects/AK47/1.jpg';
import hand from 'assets/images/other_projects/hand/1.jpeg';
import waterdrop from 'assets/images/other_projects/waterdrop/1.jpeg';
import rain from 'assets/images/other_projects/rain/1.jpeg';
import smoke from 'assets/images/other_projects/smoke/smoke.jpeg';

const OtherProjects: FC = () => {
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
							// image={image}
							// texts={texts}
							// path={texts[i]}
							// i={i}
						/>
					);
				})}
			</div>
		</>
	);
};

export default OtherProjects;
