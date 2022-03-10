import { Dimensions, ToastAndroid } from 'react-native';

/**
 * Get width and height from screen
 * @return screen sizes
 */
export const { width, height } = Dimensions.get('window');


/**
 * Show a toast (android only)
 * @param {string} message 
 */
export const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
        `${message}`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        100,
    );
};