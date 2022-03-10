import React from 'react';
import { Center, Spinner } from 'native-base';

function Loading(props) {
    return (
        <Center zIndex="1" w="full" h="full" bg="rgba(255,255,255,0.3)" position="absolute" alignItems="center" justifyContent="center">
            <Spinner accessibilityLabel="Loading" size="lg" />
        </Center>
    );
}

export default Loading;