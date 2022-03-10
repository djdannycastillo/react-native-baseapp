import React, { useRef } from 'react';
import { VStack, FormControl } from 'native-base';
import { useForm } from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather'

// Components
import { Input } from '@components/forms';
import { Button } from '@components/ui';

// Config
import resolver from './LoginForm.validations';

function LoginForm({ onSubmit }) {
    const passwordRef = useRef();
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver });

    return (
        <VStack space={3} mt="4">
            <FormControl isInvalid={errors.username ? true : false}>
                <Input 
                    control={control}
                    name="username"
                    placeholder="Usuario"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordRef.current.focus();
                    }}
                    blurOnSubmit={false}
                    iconLeft={<Feather name="user" />}
                />
                <FormControl.ErrorMessage>
                    {errors?.username?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password ? true : false}>
                <Input 
                    control={control}
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    ref={passwordRef}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    iconLeft={<Feather name="lock" />}
                />
                <FormControl.ErrorMessage>
                    {errors?.password?.message}
                </FormControl.ErrorMessage>
            </FormControl>

            <Button onPress={handleSubmit(onSubmit)} bgColor="primary">
                Iniciar sesión
            </Button>
        </VStack>
    );
}

export default LoginForm;