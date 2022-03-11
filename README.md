# Base App Template (React Native)

This repository includes a boilerplate project to start your mobile app with React Native (Frontend).


## Features

- Design based on Native Base Framework: [nativebase.io](https://nativebase.io/)
- Login request with axios (interceptors uses): [repo](https://github.com/axios/axios)
- Form with React Hook Form: [react-hook-form.com](https://react-hook-form.com/)
- Validators with yup: [repo](https://www.npmjs.com/package/yup)
- Redux Toolkit: [redux-toolkit.js.org](https://redux-toolkit.js.org/)
- Data persistence with Redux Persist: [repo](https://github.com/rt2zz/redux-persist)
- React Navigation: [reactnavigation.org](https://reactnavigation.org/)
- React Navigation Drawer: [repo](https://reactnavigation.org/docs/drawer-navigator/#installation)
- Animations with React Native Animatable: [repo](https://github.com/oblador/react-native-animatable)


## Screenshots

![React Native Base App](https://www.prowebdesarrollo.com/resources/assets/images/react-native-baseapp/00-cover.png)


## Installation

Clone and install the project with instructions below

```bash
# Clone this repository
$ git clone https://github.com/djdannycastillo/react-native-baseapp

# Install dependencies
$ npm install

# Run Android App
$ run start android

# OR Run IOS APP
$ run start ios
```
    
## Customization

### Icon app

See the ```iconset.config.js``` file to modify image paths. By default, the images are in `app/assets`: `icon.png`, `background.png`, `foreground.png`

```bash
# Install Icon Set Creator
$ npm install -g icon-set-creator

# Generate icon
$ iconset create
```

### Theme

See the `/app/utils/constants/theme.js` file to modify colors and others. More details on [Native Base website](https://docs.nativebase.io/next/customizing-theme#page-title)


### URL

See the `/app/utils/constants/config.js` file to add your `API URL` and `EXTERNAL URL` (to request other files)
## Environment Variables

To connect with your backend, you will need to add the following environment variables to your .env file

`APP_KEY`

`API_KEY`


## License

[MIT](https://choosealicense.com/licenses/mit/)

