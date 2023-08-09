import React from 'react'
import ReactDom from 'react-dom/client'
import cat from "./images/cat.png"

//FUNCTION COMPONENT
//content in the app

const App = function() {

    //create a constant variable
    const divText = "I am a text in a variable"
    //create a style variable
    const styleJSX = {color:"purple",fontFamily:"Algerian"}
    return (
    <div>
      <h1 style = {{color: "magenta", textAlign:"center"}}>Welcome to ReactJS</h1>
      <p>Let's be familiar with JSX elements</p>
      <h2>Activity: Bucket List</h2>
      <ol>
        <li>First list</li>
        <li>Second list</li>
        <li>Third list</li>
        <li>Fourth list</li>
      </ol>
      <h2>Inline Styling</h2>
      <label for="email" style={{color:"olive",padding:"1em 1em"}}>Enter Email:</label>
      <input id="email" type="text" placeholder='Type Your email' style={{backgroundColor:"rgb(230,230,230",padding:"0.5em",borderRadius:"0.5em"}}></input>
      <button style={{marginLeft:"1em", backgroundColor:"blue",padding:"0.5em 1em", borderRadius:"0.5em",color:'whitesmoke'}}>Submit Form</button>
      <figure>
        <img src={cat} style={{width:"60%"}}/>
        </figure> 
        <p className='title'>Adding a class name to a JSX element</p>
         {/* use bracket to put var  into html code when using JSX  */}
        <p className ="txtVar">{divText}</p>
        <p style={styleJSX}>{divText}</p>
        {/* add a image with at least two inline styleJSX  below*/}
        <figure>
        <img
          src={cat}
          style={{
            width: "60%",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            border: "1px solid black",
            margin: "1em",
            boxSizing: "border-box"
          }}
        />
        <figcaption
          style={{
            fontSize: "18px",
            color: "blue",
            textAlign: "center",
            marginTop: "0.5em"
          }}
        >
          Cute Kitten
        </figcaption>
      </figure>
    </div>
  );
};


//rotting the app
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(App())

