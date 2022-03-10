import React from 'react';
import { Center, Text } from 'native-base';

function Home(props) {
    return (
        <Center>
            <Text mt="12" fontSize="18">
                This is {props.route.name} page.
            </Text>
        </Center>
    );
}

export default Home;