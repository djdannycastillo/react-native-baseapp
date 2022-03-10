import React from 'react';
import { Input, Icon } from 'native-base';
import { Controller } from 'react-hook-form';

function CustomInput({
    control,
    name,
    iconLeft,
    iconRight,
    placeholder,
    ...rest
}, ref) {
    return(
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                    {...rest}
                    ref={ref}
                    variant="filled" 
                    size="lg"
                    h="55" 
                    borderRadius="12" 
                    placeholder={placeholder}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    InputLeftElement={
                        <Icon as={iconLeft} size={5} ml="4" color="muted.400" />
                    } 
                />
            )}
        />
    );
}

export default React.forwardRef(CustomInput);