import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPQLXaIVw9i18L-Hi1D3oxWJUtCvRMQ0U",
  authDomain: "clone-e453e.firebaseapp.com",
  databaseURL: "https://clone-e453e-default-rtdb.firebaseio.com",
  projectId: "clone-e453e",
  storageBucket: "clone-e453e.appspot.com",
  messagingSenderId: "511385091934",
  appId: "1:511385091934:web:4ea69b46bd0a76444759cf"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export default db;