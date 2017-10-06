import Firebase from '../helpers/Firebase';
import AuthHelper from '../helpers/Auth';
import {FETCH_POSTS} from './types';

const database = Firebase.database();

export function createPost(post) {
    database.ref('/posts').push(post);
}

export function fetchPosts() {
    return dispatch => {
        database.ref('/posts').on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        });
    }
}

export function signIn(email, password, onSuccess, onError) {
    new AuthHelper(Firebase).singIn(email, password, onSuccess, onError);
}

export function signOut(onSuccess) {
    return new AuthHelper(Firebase).signOut(onSuccess);
}