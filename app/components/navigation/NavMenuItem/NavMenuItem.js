import React from 'react';
import { Pressable, HStack, Text, Icon, Stack, Box } from 'native-base';

function NavMenuItem({
    title, 
    onPress, 
    active, 
    iconLeft, 
    iconRight
}) {
    const renderLeftContent = () => {
        if (iconLeft) {
            return(
                <Icon
                    color={ active ? "white" : "gray.500" }
                    size="5"
                    as={iconLeft}
                />
            );
        }
    }

    const renderCenterContent = () => {
        return(
            <Text fontWeight="500" color={ active ? "white" : "gray.700" }>
                {title}
            </Text>
        );
    }

    const renderRightContent = () => {
        if (iconRight) {
            return(
                <Icon
                    color={ active ? "white" : "gray.500" }
                    size="5"
                    as={iconRight}
                />
            );
        }
    }

    return (
        <Pressable 
            px="5" 
            py="3" 
            rounded="md"
            bg={ active ? "primary.500" : "transparent" }
            onPress={ onPress }
        >
            <HStack space="4" alignItems="center">
                {renderLeftContent()}

                <Stack direction="row" my="1">
                    <Box w="85%">
                        {renderCenterContent()}
                    </Box>

                    <Box>
                        {renderRightContent()}
                    </Box>
                </Stack>
            </HStack>
        </Pressable>
    );
}

export default NavMenuItem;