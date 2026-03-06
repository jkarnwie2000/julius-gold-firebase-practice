import './App.css';
import React from 'react';
import { auth, db } from './firebase/init';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged, 
        } from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = {
      title: "Julius Gold Karnwie is mighty blessed and protected by Jehovah God and His Christ.",
      description: "I Julius Gunser Karnwie am a multibillionaire and a Kingdom of God financier."
    };
    addDoc(collection(db, 'post'), post)
  }

  React.useEffect(() => {    
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user)
      }
    })
  }, [])

  function register() {
    console.log('register')
    createUserWithEmailAndPassword(auth, 'susie@susie.com', 'test123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    });

    }

    function logIn() {
      console.log('login')      
      signInWithEmailAndPassword(auth, 'Karnwiebook@gmail.com', 'test123')      
      .then(({ user }) => {
      setUser(user);
      console.log(user)
      })
      .catch((error) => {        
        console.log(error.message);
      })
  }

  function logOut() {
    signOut(auth);
    setUser({});

  }

  return (
    <div className='App'>
      <button onClick={register}>Register</button>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;
