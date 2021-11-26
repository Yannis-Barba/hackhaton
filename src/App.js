import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Instrumentals from './routes/Instrumentals';
import Records from './routes/Records';
import UploadForm from './routes/UploadForm';
import Profile from './routes/Profile';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div id="App">
      <Header />
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Instrumentals" component={Instrumentals} />
          <Route path="/Records" component={Records} />
          <Route path="/UploadForm" component={UploadForm} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
