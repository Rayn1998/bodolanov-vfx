import { FC } from 'react';
import LoadingImg from 'assets/images/loading.png';

const Loading: FC = () => {
	return (
    <img 
      className='loading' 
      src={LoadingImg} 
      alt='Loading' 
    />
  );
};

export default Loading;
