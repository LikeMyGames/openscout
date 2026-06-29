"use server";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = 'it';

// const analytics = getAnalytics(app);

export async function FirebaseLogIn(formData: FormData) {
	const email = formData.get("email")?.toString() ?? "";
	const password = formData.get("password")?.toString() ?? "";

	if (email == "" || password == "") {
		return;
	}

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...

			console.log('logged in user uid: %s', user.uid);
			console.log(user);

			redirect("/", "replace");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.log(errorCode);
			console.log(errorMessage);

			console.error(errorCode, errorMessage)
		});

	console.log(`Logging in with email: ${email}; and password: ${password}`);
}

export async function FirebaseSignUp(formData: FormData) {
	const email = formData.get("email")?.toString() ?? "";
	const password = formData.get("password")?.toString() ?? "";

	if (email == "" || password == "") {
		return;
	}

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up 
			const user = userCredential.user;
			// ...

			console.log('created user uid: %s', user.uid);
			console.log(user);

			redirect("/", "replace");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..

			console.error(errorCode, errorMessage);
		});

	console.log(`Signing up with email: ${email}; and password: ${password}`);
}

// export async function GoogleSignIn() {

//     const googleProvider = new GoogleAuthProvider();
//     googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     googleProvider.setCustomParameters({
//         'login_hint': 'user@example.com'
//     });

//     signInWithRedirect(auth, googleProvider);

//     getRedirectResult(auth)
//         .then((result) => {
//             if (!result) {
//                 return;
//             }
//             // This gives you a Google Access Token. You can use it to access Google APIs.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential?.accessToken;

//             // The signed-in user info.
//             const user = result.user;
//             // IdP data available using getAdditionalUserInfo(result)
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// }