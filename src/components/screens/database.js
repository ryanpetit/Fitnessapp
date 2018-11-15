const firebase = require("firebase");
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyAzfFPi3GPLmpct3Kn-HBBTkjsEbHCY7Ro",
    authDomain: "fitnessapp-e670b.firebaseapp.com",
    databaseURL: "https://fitnessapp-e670b.firebaseio.com",
    projectId: "fitnessapp-e670b",
    storageBucket: "fitnessapp-e670b.appspot.com",
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firestore;