import StarIcon from '@mui/icons-material/Star';
// import Chat from './components/firebase/Chat';
import Upload from './components/firebase/Upload';

function App() {
  return (
    <div id="App">
      <header> Header</header>
      <div id="main">
        Hackathon
        <StarIcon />
        {/* <Chat /> */}
        <Upload />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
