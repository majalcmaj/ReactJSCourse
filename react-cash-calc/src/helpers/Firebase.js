import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJe3xHjdLbTXDW5BuUo26Rj7nZhkNVawg",
    authDomain: "simpletodolist-913a2.firebaseapp.com",
    databaseURL: "https://simpletodolist-913a2.firebaseio.com",
    projectId: "simpletodolist-913a2",
    storageBucket: "simpletodolist-913a2.appspot.com",
    messagingSenderId: "384269998811"
};

if(Firebase.apps.length === 0) {
    Firebase.initializeApp(config);
}

export default Firebase;