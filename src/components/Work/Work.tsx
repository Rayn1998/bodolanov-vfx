import { FC, forwardRef } from 'react';
import Article from 'components/Article/Article';
import articles from 'utils/articles';

import IArticle from 'types/IArticle';

const Work = forwardRef<HTMLDivElement>((ref) => {
	return (
		<div className='work' ref={ref} >
			<div className='work__content'>
				<h2 className='work__title' id='works'>
					Participated in these projects
				</h2>
				<div className='work__articles'>
					{articles.map((article: IArticle, i: number) => {
						return <Article props={article} key={i} />
					})}
				</div>
			</div>
		</div>
	);
});

export default Work;
