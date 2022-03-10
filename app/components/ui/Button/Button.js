import React from 'react';
import { Button } from 'native-base';

function CustomButton({onPress, bgColor, children}) {
    return (
        <Button 
            mt="2" 
            h="50" 
            borderRadius="12"
            colorScheme={bgColor} 
            onPress={onPress} 
        >
            {children}
        </Button>
    );
}

export default CustomButton;