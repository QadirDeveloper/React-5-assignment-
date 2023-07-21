import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Batch from './components/Batches/Batch';
import Fifths from  './components/Fifths/Fifths';
import Listing from './components/Listing/Listing';




function App() {
 return(
    <div>
        <Header/>
        <Batch/>
        <Fifths/>
        <Listing/>
        <button className='btn btn-success'></button>
    </div>
 )
}

export default App;
