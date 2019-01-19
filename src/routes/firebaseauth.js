const express = require('express');
const router = express.Router();
import firebase from "../components/config/config"
const auth = firebase.auth();
const db = firebase.firestore().settings({timestampsInSnapshots:true});
const verify = require('../resources/admin').auth();

router.post('/create', (req, res) => {
    const userInfo = req.body.employee;

    auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(user => {
            db.collection('users').doc(user.user.uid).set({
                name: userInfo.name,
                email: userInfo.email || 'No Email',
                isAdmin: false,
            })
            .then(doc => res.json({success: true, uid: user.user.uid}))
            .catch(err => {console.log(err); json.res({err})})
        })
        .catch(err => {
            console.log(err);
            res.json({ err });
        });
});


router.post('/login', (req, res) => {
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            db.collection('users').doc(user.user.uid).get()
            .then(doc => {
                user.user.getIdToken().then(token => {
                    res.json({...doc.data(), uid: user.user.uid, token})
                })
            })
        })
        .catch(err => {
            console.log(err);
            res.json({ err });
        })
});

router.post('/logout', (req, res) => {
    auth.signOut()
    .then(() => res.json({ signedOut: true}))
    .catch(err => {
        console.log(err);
        res.json({ err });
    })
});

router.post('/verify', (req, res) => {
    const token = req.body.token;
    try{
    verify.verifyIdToken(token)
        .then(code => res.json(code))
    }
    catch(err){
        res.json(err);
    }
})

module.exports = router;