

let instance = null;
export default class AuthHelper {
    constructor(firebase) {
        if(!instance) {
            instance = this;
        }
        this.auth = firebase.auth();

        return instance;
    }

    singIn(email, password, onSuccess, onError) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then(onSuccess)
            .catch(onError);
    }

    singUp(email, password, onSuccess, onError) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(onSuccess)
            .catch(onError);
    }

    signOut(onSuccess, onError) {
        this.auth.signOut()
            .then(onSuccess)
            .catch(onError);
    }

    getUser() {
        return this.auth.currentUser;
    }

    onAuthStateChange(callback) {
        this.auth.onAuthStateChanged(callback);
    }
}