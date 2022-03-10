import React from 'react';
import { Image } from 'native-base';

import Images from '@utils/constants/images'

function LogoImg({size = 'xl'}) {
    return (
        <Image source={Images.Logo} alt="Logo" size={size} resizeMode="contain" />
    );
}

export default LogoImg;