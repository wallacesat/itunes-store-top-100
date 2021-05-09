import * as React from 'react';
import Lottie from 'react-lottie';

import * as emptyDadta from '~/lotties/empty_data.json';

const LottieNotFound: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyDadta,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieNotFound;
