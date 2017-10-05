import Firebase from '../firebase';
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