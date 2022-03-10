import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { VStack } from 'native-base';

// Redux
import { logout } from "@store/auth/auth.actions";
import { selectCurrentUser } from "@store/auth/auth.selectors";

// Components
import { HeaderMenu, NavMenu, FooterMenu } from "@components/navigation";
import Screens from "./Screens";

// Variables
import { EXTERNAL_URL } from '@utils/constants/config';
import { height } from '@utils/helpers';

function SidebarMenu(props) {
    const { navigation, state: { index: activeIndex } } = props;
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1" h={height - 50}>
                <HeaderMenu 
                    firstName={user?.firstName} 
                    lastName={user?.lastName} 
                    picture={`${EXTERNAL_URL}/${user?.picture}`}
                />

                <NavMenu 
                    screens={Screens} 
                    activeIndex={activeIndex} 
                    navigation={navigation}
                    onLogout={handleLogout} 
                />

                <FooterMenu />
            </VStack>
        </DrawerContentScrollView>
    );
}

export default SidebarMenu;
