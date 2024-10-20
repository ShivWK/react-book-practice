import { useState } from 'react';
import './App.css';
import {PEOPLE1, PEOPLE2} from './util.js/constant';
import Button from './components/Button';

// function handleClick() {
//   console.log("Bubble Clicked 1");
// }

// function handleClick2() {
//   console.log("Bubble Clicked 2");
// }

// function Item({ name, isPacked}) {
//   return <li>{isPacked && name + " done"}</li>
// }

function App() {
  // const [number, setNumber] = useState(0);
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0
  // });

  // Multiple fields update with just one line of code

    // const [person, setPerson] = useState({
    //   firstName: 'Barbara',
    //   lastName: 'Hepworth',
    //   email: 'bhepworth@sculpture.com'
    // });

    // function handleFirstNameChange(e) {
    //   setPerson({
    //     ...person,
    //     [e.target.name] : e.target.value
    //   });
    // }

    // function handleLastNameChange(e) {
    //   setPerson({
    //     ...person,
    //     lastName: e.target.value
    //   });
    // }

    // function handleEmailChange(e) {
    //   setPerson({
    //     ...person,
    //     email: e.target.value
    //   });
    // }

  //Updating nested objects

    const [person, setPerson] = useState({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });

    function handleNameChange(e) {
      setPerson({
        ...person,
        name: e.target.value
      });
    }

    function handleTitleChange(e) {
      setPerson({
       ...person,
       artwork : {
        ...person.artwork,
        title : e.target.value,
       }
      });
    }

    function handleCityChange(e) {
      setPerson({
        ...person,
        artwork : {
          ...person.artwork,
          city : e.target.value,
        }
        
      });
    }

    function handleImageChange(e) {
      setPerson({
        ...person,
        artwork : {
          ...person.artwork,
          image : e.target.value,
        }
      });
    }
  
  return (
    <>
      {/* <Button onClick={function() {console.log("clicked-1")}}>Click me</Button>
      <hr></hr>
      <Button onClick={() => {console.log("clicked-2")}}>Click me again</Button> */}

      {/* <div onClickCapture = {()=> console.log("capture div click 1")} onClick={()=>console.log("bubble div clicked")} style={{border: "2px solid black", padding : "5px"}}>
        <Button onClickCapture = {()=> console.log("capture click 1")} onClick={handleClick}>Click me</Button>
        <hr />
        <Button onClickCapture = {()=> console.log("capture click 2")} onClick={handleClick2}>Click me again</Button>
      </div> */}
          {/* <h1>{number}</h1>
          <button onClick={() => {
            setNumber(number + 5);
            setTimeout(() => {
              console.log(number)
            }, 3000)
          }}>+5</button> */}
      
      {/* <h1>"Selly rides packing"</h1>
      <ul>
        <Item isPacked={true} name={"space-suite"} />
        <Item isPacked={false} name={"space-suite"} />
        <Item isPacked={true} name={"space-suite"} />
      </ul> */}

    {/* <div
      onPointerMove={e => {
        setPosition({
          x : e.clientX,
          y : e.clientY,
        })
      }}
      
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>         */}

    {/* multiple field update */}
            {/* <label>
              First name:
              <input
                name="firstName"
                value={person.firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <br />
            <label>
              Last name:
              <input
                name = "lastName"
                value={person.lastName}
                onChange={handleLastNameChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                name = "email"
                value={person.email}
                onChange={handleEmailChange}
              />
            </label>
            <p>
              {person.firstName}{' '}
              {person.lastName}{' '}
              ({person.email})
            </p> */}

    {/* updating nested object */}

              <label>
                Name:
                <input
                  value={person.name}
                  onChange={handleNameChange}
                />
              </label>
              <br /><br />
              <label>
                Title:
                <input
                  value={person.artwork.title}
                  onChange={handleTitleChange}
                />
              </label>
              <br /><br />

              <label>
                City:
                <input
                  value={person.artwork.city}
                  onChange={handleCityChange}
                />
              </label>
              <br /><br />

              <label>
                Image:
                <input
                  value={person.artwork.image}
                  onChange={handleImageChange}
                />
              </label>
              <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
              </p>
              <img 
                src={person.artwork.image} 
                alt={person.artwork.title}
              />
            </>
          );
        }
export default App
