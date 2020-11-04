import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase/app'
import ENV from './env.json';

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const firebaseConfig = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DATABASE_URL,
    projectId: ENV.FIREBASE_PROJECT_ID,
    storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID,
    measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);


const App = createStackNavigator({
    Login : {screen : LoginScreen},
    Signup : {screen : SignupScreen},
    Home: { screen: MemoListScreen },
    MemoDetail : {screen : MemoDetailScreen},
    MemoEdit : {screen : MemoEditScreen},


}, {
    defaultNavigationOptions: {
        headerTitle : 'VALS MEMO',
        headerStyle : {
            backgroundColor : '#2bddca',
        },
        headerTitleStyle : {
            color : '#fff',
        },
        headerTintColor : '#fff',
        headerBackTitle : null,

    }
});

export default createAppContainer(App);