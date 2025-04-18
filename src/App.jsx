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
    //   return <li>{isPacked && name + " done"}</lvi>
    // }
    
    let nextId =  3;

//Removing an element from the array

    // let initialArtists = [
    //   { id: 0, name: 'Marta Colvin Andrade' },
    //   { id: 1, name: 'Lamidi Olonade Fakeye'},
    //   { id: 2, name: 'Louise Nevelson'},
    // ];

//Transforming an array in state

    // let initialShapes = [
    //   { id: 0, type: 'circle', x: 50, y: 100 },
    //   { id: 1, type: 'square', x: 150, y: 100 },
    //   { id: 2, type: 'circle', x: 250, y: 100 },
    // ];

  //insertig an item in the mid of an array

      // const initialArtists = [
      //   { id: 0, name: 'Marta Colvin Andrade' },
      //   { id: 1, name: 'Lamidi Olonade Fakeye'},
      //   { id: 2, name: 'Louise Nevelson'},
      // ];

  //sorting / reversing the array

      // const initialList = [
      //   { id: 0, title: 'Big Bellies' },
      //   { id: 1, title: 'Lunar Landscape' },
      //   { id: 2, title: 'Terracotta Army' },
      // ];

  //updating an object insie an object in a state

      const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
      ];

  //task 2 , 2.7 

      const initialProducts = [{
        id: 0,
        name: 'Baklava',
        count: 1,
      }, {
        id: 1,
        name: 'Cheese',
        count: 5,
      }, {
        id: 2,
        name: 'Spaghetti',
        count: 2,
      }];

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

    // const [person, setPerson] = useState({
    //   name: 'Niki de Saint Phalle',
    //   artwork: {
    //     title: 'Blue Nana',
    //     city: 'Hamburg',
    //     image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    //   }
    // });

    // function handleNameChange(e) {
    //   setPerson({
    //     ...person,
    //     name: e.target.value
    //   });
    // }

    // function handleTitleChange(e) {
    //   setPerson({
    //    ...person,
    //    artwork : {
    //     ...person.artwork,
    //     title : e.target.value,
    //    }
    //   });
    // }

    // function handleCityChange(e) {
    //   setPerson({
    //     ...person,
    //     artwork : {
    //       ...person.artwork,
    //       city : e.target.value,
    //     }
        
    //   });
    // }

    // function handleImageChange(e) {
    //   setPerson({
    //     ...person,
    //     artwork : {
    //       ...person.artwork,
    //       image : e.target.value,
    //     }
    //   });
    // }
  
  //Task 1 2.6 chapter react

      // const [player, setPlayer] = useState({
      //   firstName: 'Ranjani',
      //   lastName: 'Shettar',
      //   score: 10,
      // });

      // function handlePlusClick() {
      //   setPlayer({
      //     ...player,
      //     score : player.score + 1,
      //   })
      //   // player.score++;
      // }

      // function handleFirstNameChange(e) {
      //   setPlayer({
      //     ...player,
      //     firstName: e.target.value,
      //   });
      // }

      // function handleLastNameChange(e) {
      //   setPlayer({
      //     ...player,
      //     lastName: e.target.value
      //   });
      // }

      //Adding to the array state

        // const [name, setName] = useState('');
        // const [artists, setArtists] = useState([]);

      //Removing fro the array

        // const [artists, setArtists] = useState(
        //   initialArtists
        // );

      //Transforming the array in state

        // const [shapes, setShapes] = useState(
        //   initialShapes
        // );

        // function handleClick() {
        //   const nextShapes = shapes.map((shape) => {
        //     if (shape.type === "square") {
        //       return {
        //         ...shape,
        //         x : shape.x + 50,
        //         y : shape.y + 30,
        //       }
        //     } else {
        //       return {
        //         ...shape,
        //         y : shape.y + 50,
        //       }
        //     }
        //   })
        //   // Re-render with the new array
        //   setShapes(nextShapes);
        // }

    // Inserting in the mid of the array

        // const [name, setName] = useState('');
        // const [artists, setArtists] = useState(
        //   initialArtists
        // );
      
        // function handleClick() {
        //   let insertAt = 1;
        //   let nextArtists = [
        //     ...artists.slice(0 , insertAt),
        //     {id : nextId++, name : name},
        //     ...artists.slice(insertAt),
        //   ]
        //   setArtists(nextArtists);
        //   setName('');

        //   console.log(artists)
        // }

    //sorting and reversing the array

        // const [list, setList] = useState(initialList);

        // function handleClick() {
        //       let reverseed  = [...list];
        //       reverseed.reverse();
        //       setList(reverseed);
        // }

    //Updating an object inside an array in state

        // const [myList, setMyList] = useState(initialList);
        // const [yourList, setYourList] = useState(
        //   initialList
        // );
      
        // function handleToggleMyList(artworkId, nextSeen) {
        //   const myNextList = myList.map(object => {
        //     if (object.id === artworkId) {
        //       return {...object , seen : nextSeen};
        //     } else {
        //       return object;
        //     }
        //   })
        //   setMyList(myNextList);
        // }
      
        // function handleToggleYourList(artworkId, nextSeen) {
        //   const yourNextList = yourList.map(object => {
        //       if (object.id === artworkId) {
        //         return {...object, seen : nextSeen}
        //       } else {
        //         return object;
        //       }
        //     })
        //     setYourList(yourNextList);
        //   }

    //task 2 , 2.7 

        // const [
        //   products,
        //   setProducts
        // ] = useState(initialProducts)
      
        // function handleIncreaseClick(productId) {
        //   setProducts(products.map(product => {
        //     if (product.id === productId) {
        //       return {
        //         ...product,
        //         count: product.count + 1
        //       };
        //     } else {
        //       return product;
        //     }
        //   }))
        // }
        //   function handleDecreaseClick(productId) {
        //   let newCart = products.map(product => {
        //     if (product.id === productId) {
        //       return {
        //         ...product,
        //         count: product.count > 0 ? product.count - 1 : product.count,
        //       };
        //     } else {
        //       return product;
        //     }
        //   })
        //   let filtered = newCart.filter(data => data.count !== 0);
        //   setProducts(filtered);
        // }  

        // reacting to input and state
        
        let [isEditActive , setEditActive] = useState(false);
        let [firstName, setFirstName] = useState('Jane');
        let [lastName, setLastName] = useState('Jacods');

        function clickHandler(e) {
          setEditActive(!isEditActive);
        }

        // sharing state between components

        const [isActive, setIsActive] = useState(true);
  
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

              {/* <label>
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
              /> */}

        {/* Task 1 */}

            {/* <label>
              Score: <b>{player.score}</b>
              {' '}
              <button onClick={handlePlusClick}>
                +1
              </button>
            </label>
            <label>
              First name:
              <input
                value={player.firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <label>
              Last name:
              <input
                value={player.lastName}
                onChange={handleLastNameChange}
              />
            </label> */}

{/* Updating arrays in state */}

    {/* Adding to the array */}

          {/* <h1>Inspiring sculptors:</h1>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={() => {
            setArtists([
              ...artists,
              {id : nextId++ , name : name}
            ])
          }}>Add</button>
          <ul>
            {artists.map(artist => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul> */}

    {/*Removing form an array*/}

                  {/* <h1>Inspiring sculptors:</h1>
                  <ul>
                    {artists.map(artist => (
                      <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                          setArtists(artists.filter(a => a.id !== artist.id))
                        }}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul> */}

      {/* Transforming an array */}

          {/* <button onClick={handleClick}>
            Move circles down!
          </button>
          {shapes.map(shape => (
            <div
              key={shape.id}
              style={{
              background: 'purple',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius:
                shape.type === 'circle'
                  ? '50%' : '',
              width: 20,
              height: 20,
            }} />
          ))} */}

      {/* inserting in the mid of the array in state */}

              {/* <h1>Inspiring sculptors:</h1>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <button onClick={handleClick}>
                Insert
              </button>
              <ul>
                {artists.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
                ))}
              </ul> */}

      {/*sorting reversing the array in state*/}

              {/* <button onClick={handleClick}>
                  Reverse
              </button>
              <ul>
              {list.map(artwork => (
                  <li key={artwork.id}>{artwork.title}</li>
              ))}
              </ul> */}

      {/* Updating an object in an array in state */}

            {/* <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
              artworks={myList}
              onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList
              artworks={yourList}
              onToggle={handleToggleYourList} />
            </>
          );
        }


        function ItemList({ artworks, onToggle }) {
          return (
            <ul>
              {artworks.map(artwork => (
                <li key={artwork.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={artwork.seen}
                      onChange={e => {
                        onToggle(
                          artwork.id,
                          e.target.checked
                        );
                      }}
                    />
                    {artwork.title}
                  </label>
                </li>
              ))}
            </ul>
          );
        } */}

  {/* task 2 , 2.7 */}

          {/* <ul>
              {products.map(product => (
                <li key={product.id}>
                  {product.name}
                  {' '}
                  (<b>{product.count}</b>)
                  <button onClick={() => {
                    handleIncreaseClick(product.id);
                  }}>
                    +
                  </button>
                  <button onClick = {() => {
                      handleDecreaseClick(product.id)
                    }}>
                    –
                  </button>
                </li>
              ))}
            </ul> */}

  {/* React to input an state */}
  
      {/* task 2 */}

          {/* <form>
            <label>
              First name:{' '}
              <b style = {{ "display" : isEditActive ? "none" : ""}}>{firstName}</b>
              <input onChange = {(e) => setFirstName(e.target.value) } style = {{ "display" : isEditActive ? "" : "none"}}></input>
            </label>
            <br /><br />
            <label>
              Last name:{' '}
              <b style = {{ "display" : isEditActive ? "none" : ""}}>{lastName}</b>
              <input onChange = {(e) => setLastName(e.target.value) } style = {{ "display" : isEditActive ? "" : "none"}}/>
            </label>
            <br /><br />
            <button type="submit" onClick = {(e) => {
                                                    e.preventDefault();
                                                    clickHandler(e)}
                                                              }>
              {isEditActive ? "Save " : "Edit "}Profile
            </button>
            <p><i>{`Hello, ${firstName} ${lastName}!`}</i></p>
          </form> */}

      {/* sharing the state between components */}

          <h2>Almaty, Kazakhstan</h2>
          <Panel title="About" isActive={isActive} onShow={() => setIsActive(true)}>
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
          </Panel>
          <Panel title="Etymology" isActive={!isActive} onShow={() => setIsActive(false)}>
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
          </Panel>

        </>
        );
      }

      function Panel({ title, children, isActive, onShow }) {
        
        return (
          <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
              <p>{children}</p>
            ) : (
              <button onClick={() => onShow()}>
                Show
              </button>
            )}
          </section>
        );
      }

export default App

        // when we mutate an state then react couldn't judge the change because it dont have the older value through which it can compare the new value, so it doesnt do the rerender as nothing is changed according to it.