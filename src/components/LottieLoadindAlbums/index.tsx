import * as React from 'react';
import Lottie, { Options } from 'react-lottie';

import * as emptyDadta from '~/lotties/loading_albums.json';
import Label from '../Label';
// import * as emptyDadta from '~/lotties/loading_audio_2.json';

const LottieLoadindAlbums: React.FC = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: emptyDadta,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="relative flex items-center bg-transparent z-30">
      <Label className="text-9xl absolute ">Loading .. </Label>
      <Lottie options={defaultOptions} direction={1} width={600} height={600} />
    </div>
  );
};

export default LottieLoadindAlbums;
