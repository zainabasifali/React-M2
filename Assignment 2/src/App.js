import './App.css';
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Input_list from './Components/List.jsx';
import Questionare from './Components/Questionare.jsx';

function App() {
  return (
      <>
      <h2>Answer The Questions</h2>
      <Questionare/><br/><br/>
      <h2>Add the Room List</h2>
      <Input_list/><br/>
      </>
  );
}

export default App;
