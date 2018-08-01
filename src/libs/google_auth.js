import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

// Calling this function will open Google for login.
export const googleLogin = async () => {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure({
      forceConsentPrompt: true,
    });

    const data = await GoogleSignin.signIn();
    console.info(data);

    console.info(GoogleSignin)

    console.info(accessToken);
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

    console.info(JSON.stringify(currentUser.user.toJSON()));
  } catch (e) {
    console.error(e);
  }
}
