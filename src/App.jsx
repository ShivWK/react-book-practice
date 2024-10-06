import './App.css';
import {PEOPLE1, PEOPLE2} from './util.js/constant';
import Button from './components/Button';

function handleClick() {
  console.log("Bubble Clicked 1");
}

function handleClick2() {
  console.log("Bubble Clicked 2");
}

function App() {
  
  return (
    <>
      {/* <Button onClick={function() {console.log("clicked-1")}}>Click me</Button>
      <hr></hr>
      <Button onClick={() => {console.log("clicked-2")}}>Click me again</Button> */}

      <div onClickCapture = {()=> console.log("capture div click 1")} onClick={()=>console.log("bubble div clicked")} style={{border: "2px solid black", padding : "5px"}}>
        <Button onClickCapture = {()=> console.log("capture click 1")} onClick={handleClick}>Click me</Button>
        <hr />
        <Button onClickCapture = {()=> console.log("capture click 2")} onClick={handleClick2}>Click me again</Button>
      </div>
    </>
  )
}

export default App
