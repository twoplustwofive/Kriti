var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(token);

        fetch("/users/login/success", {
            method: "POST",
            body: JSON.stringify(result.user),
            cache: "no-cache",
            headers: new Headers({
                "content-type": "application/json"
            })
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        console.log(error);
    });
}