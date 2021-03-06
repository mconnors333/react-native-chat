// src/actions/index.js
export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
});

// src/actions/index.js
export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());

        firebase.database()
                .ref('messages')
                .on('value', (snapshot) => {
                    // gets around Redux panicking about actions in reducers
                    setTimeout(() => {
                        const messages = snapshot.val() || [];

                        dispatch(receiveMessages(messages))
                    }, 0);
                });
    }
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

        dispatch(receivedMessages());
    }
}

// src/actions/index.js
export const login = () => {
    return function (dispatch) {
        dispatch(startAuthorizing());

        firebase.auth()
                .signInAnonymously()
                .then(() => {
                    dispatch(userAuthorized());
                    dispatch(fetchMessages());
                });
    }
}
