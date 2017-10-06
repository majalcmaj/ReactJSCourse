import React from 'react';
import {signOut as signOutAct} from '../actions';

function signOut(history) {
    return () => {
        signOutAct(() => {
            history.push('/');
        });
    }
}

export default function ({children, history}) {
    return (
        <div>
            <button className='btn btn-warning' onClick={signOut(history)}>Sign out</button>
            {children}
        </div>
    );
}

