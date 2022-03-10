import React from 'react';
import { Center, Avatar, Text } from 'native-base';

function HeaderMenu({firstName = '', lastName = '', picture = ''}) {
    return (
        <Center pt="3">
            <Avatar size="lg" bg="primary.500" source={{uri: picture}}>
                { `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}` }
            </Avatar>

            <Text fontSize="12" mt="1" color="gray.500" fontWeight="500">Welcome</Text>
            <Text bold color="gray.700">
                { firstName } { lastName }
            </Text>
        </Center>
    );
}

export default HeaderMenu;