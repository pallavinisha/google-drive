import './App.css';
import Header from './Components/Header';
import {useState} from 'react';
import Sidebar from './Components/sidebar/index'
import SideIcons from './Components/sideIcons';
import FilesView from './Components/filesView/FilesView';
import GDLogo from './media/gdlogo.png';
import {auth, provider} from './firebase';


function App() {
  const [user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }
 
  //authentication
  return (
    <div className="app">
      {
        user ? (
        <>

      <Header userPhoto={user.photoURL}/>
     
     <div className= "app_main">
     <Sidebar />
     <FilesView />
     <SideIcons />

     </div>
       </>
       ):(
        <div className='app__login'>
        <img src={GDLogo} alt="Google Drive" />
        <button onClick={handleLogin}>Log in to Google Drive</button>
      </div>

       )
      }
    
    </div>
  );
}

export default App;
