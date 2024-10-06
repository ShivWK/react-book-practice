import './App.css';
import {PEOPLE1, PEOPLE2} from './util.js/constant';
import Button from './components/Button';

function handleClick() {
  console.log("Clicked 1");
}

function handleClick2() {
  console.log("Clicked 2");
}

function App() {
  
  return (
    <>
      <Button onClick={function() {console.log("clicked-1")}}>Click me</Button>
      <hr></hr>
      <Button onClick={() => {console.log("clicked-2")}}>Click me again</Button>
    </>
  )
}

export default App
