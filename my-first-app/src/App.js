// import logo from './logo.svg';
import './App.css';
// import {UserCard} from './components/UserCard';
import Header from './components/headerComponents/Header';
import Content from './components/contentComponents/Content';
import './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Content/>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
