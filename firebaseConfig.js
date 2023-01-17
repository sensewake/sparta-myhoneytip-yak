import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyAkFWtAPvcajuV2-uiJMo-5lhWsbae91eg",
    authDomain: "sparta-myhoneytip-yak-b0472.firebaseapp.com",
    projectId: "sparta-myhoneytip-yak-b0472",
    databaseURL: "https://sparta-myhoneytip-yak-b0472-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "sparta-myhoneytip-yak-b0472.appspot.com",
    messagingSenderId: "354873355002",
    appId: "1:354873355002:web:c070c149af0798c7b97743",
    measurementId: "G-T14SPVDEXN"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()