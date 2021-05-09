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
    <>
      <div className="hidden xl:flex">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="flex xl:hidden">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </>
  );
};

export default LottieNotFound;
