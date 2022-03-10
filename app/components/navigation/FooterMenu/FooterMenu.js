import React from 'react';
import { VStack, Heading } from 'native-base';
import { appName, appVersion, currentYear } from '@utils/constants/config';

function FooterMenu() {
    return (
        <VStack 
            w="full" 
            h="50" 
            bottom="0" 
            position="absolute" 
            borderTopColor="gray.100" 
            borderTopWidth="1" 
            alignItems="center"
            justifyContent="center"
            safeAreaBottom
        >
            <Heading size="xs" color="coolGray.600" fontWeight="600">
                {`Version ${appVersion}`}
            </Heading>
            <Heading size="xs" color="coolGray.600" fontWeight="medium">
                {`© ${appName} ${currentYear}`}
            </Heading>
        </VStack>
    );
}

export default FooterMenu;