import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './Chat';
import SignIn from './signIn';
import { auth } from './index';

function AppChat() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default AppChat;
