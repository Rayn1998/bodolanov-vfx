import { FC } from 'react';

import eq from 'assets/images/soft-icons/3DE4.png';
import maya from 'assets/images/soft-icons/maya.png';
import houdini from 'assets/images/soft-icons/houdini.png';
import nuke from 'assets/images/soft-icons/Nuke.png';

const WorkStack: FC = () => {
	const icons = [eq, maya, houdini, nuke];

	return (
		<div className='workstack'>
			<h2 className='workstack__title'>Working stack</h2>
			<div className='workstack__icons'>
				{icons.map((icon) => {
					return (
						<div
							className='workstack__icon'
							key={icon}
							style={{ backgroundImage: `url(${icon})` }}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default WorkStack;
