import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Redux
import { selectIsAuthenticated } from '@store/auth/auth.selectors';

// Components
import Login from "@screens/Login/Login";
import SidebarMenu from './SidebarMenu';
import Screens from './Screens';

// Config
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack(props) {
    const { navigation } = props;
    const isAuthenticated = useSelector(selectIsAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) navigation.navigate('Login');
    }, [isAuthenticated]);

    return (
        <Drawer.Navigator
            drawerContent={props => <SidebarMenu {...props} />}
            initialRouteName="Home"
        >
            {Screens
                .filter(screen => !screen.isHiddenMenu)
                .map((screen, key) => (
                    <Drawer.Screen key={key} name={screen.name} component={screen.component} />
                )
            )}
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated
                ? <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerTransparent: true
                    }}
                />
                : <Stack.Screen name="App" component={AppStack} />
            } 
        </Stack.Navigator>
    );
}