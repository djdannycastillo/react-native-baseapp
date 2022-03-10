import React from 'react';
import { VStack, Divider } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

// Components
import NavMenuItem from '../NavMenuItem/NavMenuItem';

function NavMenu({screens = [], activeIndex, navigation, onLogout}) {
    return (
        <VStack divider={<Divider />} space="4">
            <VStack space="3">
                {screens
                    .filter(screen => !screen.isHiddenMenu)
                    .map((screen, index) => (
                        <NavMenuItem 
                            key={index}
                            title={screen.name}
                            active={index === activeIndex} 
                            iconLeft={<Feather name={screen.icon} />}
                            iconRight={<Feather name="chevron-right" />}
                            onPress={() => navigation.navigate(screen.routeName)}
                        />
                    )
                )}

                {onLogout && <NavMenuItem 
                    title="Logout"
                    iconLeft={<Feather name="power" />}
                    onPress={onLogout}
                />}
            </VStack>
        </VStack>
    );
}

export default NavMenu;