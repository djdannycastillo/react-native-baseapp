// Screen components
import Login from "@screens/Login/Login";
import Home from "@screens/Home/Home";

// Routes
export const LoginScreen = {
    name: 'Login',
    routeName: 'Login',
    component: Login,
    isHiddenMenu: true,
};
export const HomeScreen = {
    name: 'Home',
    routeName: 'Home',
    icon: 'home',
    component: Home
};

const Screens = [
    LoginScreen,
    HomeScreen,
];

export default Screens;