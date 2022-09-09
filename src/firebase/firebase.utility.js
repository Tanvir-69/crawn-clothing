import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/firestore';
// import 'firebase/auth';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const firebaseConfig = {                  
    apiKey: "AIzaSyBAamXGxDneNTIArCxacJoQGWP-HzO1klI",
    authDomain: "crown-test-db-21397.firebaseapp.com",
    projectId: "crown-test-db-21397",
    storageBucket: "crown-test-db-21397.appspot.com",
    messagingSenderId: "29337994617",
    appId: "1:29337994617:web:d9cf893b3a78e181529ba8",
    measurementId: "G-GTLN4ESBL5"
  };

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
auth.languageCode = 'it';
// export const firestore = firebase.firestore();
// console.log('auth',auth)


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => (
  signInWithPopup(auth,provider).then(response=>{
    console.log('res:',response)
    // const token = response.user.accessToken
    // console.log('token:',token)
  }).catch(error=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  })
  )

// export default firebase;