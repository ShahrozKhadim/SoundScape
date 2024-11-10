# SoundScape

SoundScape is a mobile app built with React Native, Firebase, and integrates various features like authentication, product management, shopping cart, and real-time updates. It allows users to explore products, make purchases, manage their profiles, and more.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Running the App](#running-the-app)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, login, reset password).
- Browse and explore a collection of products.
- Add and remove products from the shopping cart.
- Track user activity and preferences (e.g., search history, cart items).
- Real-time updates with Firebase Realtime Database.
- **Firebase Dynamic Links** for sharing and deep linking.
- **React Navigation Deep Linking** for navigating to specific screens via URL.


## Technologies

- **React Native**: Cross-platform mobile development.
- **Firebase**: Backend services for authentication, database, dynamic links and analytics.
- **Redux**: State management for user data, products, and cart.
- **React Navigation**: Navigation handling across screens.
- **Formik & Yup**: Form handling and validation.
- **React Native Firebase**: Firebase integration for authentication, messaging, and dynamic links.
- **Moment**: Date/time manipulation.
- **React Native Libraries**: Includes libraries for UI enhancements, image cropping, document picker, and others.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended version: 16.x or higher)
- [Yarn](https://yarnpkg.com/) (Optional but recommended)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (if not using Expo)

### Steps

1. **Clone the repository**

   ```bash
   git clone [https://github.com/yourusername/soundscape.git](https://github.com/ShahrozKhadim/SoundScape)
   cd soundscape
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following values:

   ```env
   FIREBASE_API_KEY=your-firebase-api-key
   FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   FIREBASE_PROJECT_ID=your-firebase-project-id
   FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   FIREBASE_MESSAGING_SENDER_ID=your-firebase-sender-id
   FIREBASE_APP_ID=your-firebase-app-id
   FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
   FIREBASE_DATABASE_URL=your-firebase-database-url
   GOOGLE_WEB_CLIENT_ID=your-google-client-id
   FACEBOOK_APP_ID=your-facebook-app-id
   FACEBOOK_LOGIN_PROTOCOL_SCHEME=your-facebook-login-scheme
   DEEPLINK=your-deep-link-url
   ```

   **Note**: Replace the placeholders with the actual values from your Firebase console.

4. **Run the app**

   For iOS (requires Xcode):
   ```bash
   npx react-native run-ios
   ```

   For Android (requires Android Studio):
   ```bash
   npx react-native run-android
   ```

## Environment Variables

This project requires the following environment variables to be set in a `.env` file:

- `FIREBASE_API_KEY`: Your Firebase API Key.
- `FIREBASE_AUTH_DOMAIN`: Firebase Auth domain.
- `FIREBASE_PROJECT_ID`: Firebase project ID.
- `FIREBASE_STORAGE_BUCKET`: Firebase storage bucket URL.
- `FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID.
- `FIREBASE_APP_ID`: Firebase app ID.
- `FIREBASE_MEASUREMENT_ID`: Firebase measurement ID for analytics.
- `FIREBASE_DATABASE_URL`: Firebase Realtime Database URL.
- `GOOGLE_WEB_CLIENT_ID`: Google Web Client ID for authentication.
- `FACEBOOK_APP_ID`: Facebook App ID for login integration.
- `FACEBOOK_LOGIN_PROTOCOL_SCHEME`: Facebook login scheme for mobile deep linking.
- `DEEPLINK`: Deep link URL for opening the app in specific contexts.

## Running the App

Once the app is set up and running:

- **Login/Sign Up**: Use Firebase Authentication to log in or create a new account.
- **Explore Products**: Browse products and view their details.
- **Add to Cart**: Add items to the shopping cart and view the cart contents.
- **Checkout**: Complete the purchase process.

## Scripts

Here are the available npm scripts for different tasks:

- **`npm run android`**: Runs the app on an Android emulator or device.
- **`npm run ios`**: Runs the app on an iOS simulator or device (requires Xcode).
- **`npm run lint`**: Runs ESLint to check for linting errors.
- **`npm run start`**: Starts the Metro bundler.
- **`npm run server`**: Runs a JSON server with `db.json` for mock API.
- **`npm run build`**: Transpiles the source code using Babel.
- **`npm run test`**: Runs Jest tests.
- **`npm run release-android`**: Creates a production bundle for Android.

## Dependencies

### Core Dependencies:

- **`@react-native-firebase/*`**: Firebase integration (auth, database, messaging).
- **`@react-navigation/native`, `@react-navigation/native-stack`**: Navigation handling across screens.
- **`react-redux`, `@reduxjs/toolkit`, `redux-thunk`**: State management.
- **`formik`, `yup`**: Form handling and validation.
- **`axios`**: HTTP client for API calls.
- **`react-native-image-crop-picker`**: Image cropping and selection.
- **`react-native-fbsdk-next`**: Facebook login integration.

### Development Dependencies:

- **`babel-jest`, `jest`**: Testing libraries for React Native.
- **`eslint`, `prettier`**: Code linting and formatting.
- **`metro-react-native-babel-preset`**: Babel preset for React Native.
- **`typescript`**: TypeScript for type safety (optional, depending on project setup).

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Be sure to follow the guidelines below:

1. Fork the repository.
2. Clone your fork and create a new branch.
3. Make changes and commit them with meaningful commit messages.
4. Open a pull request with a detailed description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
