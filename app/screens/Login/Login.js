import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Center, Box, Heading } from 'native-base';
import * as Animatable from 'react-native-animatable';

// Redux
import { login } from '@store/auth/auth.actions';
import selectAuth from '@store/auth/auth.selectors';

// Components
import { showToast } from '@utils/helpers';
import { LogoImg, Loading } from '@components/common';

// Sections
import LoginForm from './LoginForm/LoginForm';

export default function Login() {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(selectAuth);

    useEffect(() => {
        if (error) showToast(error.error);
    }, [error]);

    const handleLogin = ({ username, password }) => {
        dispatch(login({ username, password }));
        Keyboard.dismiss();
    }

    return (
        <>
            {isLoading && <Loading />}
            <Center w="full">
                <Box safeArea py="8" w="90%" maxW="290">
                    <Animatable.View animation="fadeInUp">
                        <LogoImg size="xl" />

                        <Heading size="lg" color="coolGray.800" fontWeight="600" mt="1">
                            ¡Bienvenido!
                        </Heading>
                        <Heading size="xs" color="coolGray.600" fontWeight="medium" mt="1">
                            Ingresa tus datos para continuar
                        </Heading>

                        <LoginForm onSubmit={handleLogin} />
                    </Animatable.View>
                </Box>
            </Center>
        </>
    );
}