import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './comments'
import avatarWoman from './images/female_portrait_woman_icon.svg'
import avatarGirl from './images/child_girl_kid_icon.svg'
import avatarPonytail from './images/joker_squad_suicide_woman_icon.svg'
import User__Feedback from './UserFeedBack'
import shonenpic from './images/shoenanime.png'
import shojopic  from'./images/shojoAnime.png'
import seinenpic from './images/seinenAnime.png'
import isekaipic from './images/isekaiAnime.png'
import Card from './card'
const App = function(){
  return (
    <div className='ui comments'>
      <User__Feedback>
      <User name = 'Ms.Amber'
      date = '8:30AM'
      msg = 'Hey I just woke up'
      picture = {avatarWoman }
      />
      </User__Feedback>
      
      <User__Feedback>
      <User name = 'Ms.Lisa'
      date = '9:30AM'
      msg = 'Good Morning!'
      picture = {avatarGirl }
      />
      </User__Feedback>

      <User__Feedback>
      <User name = 'Ms.Fannie'
      date = '4PM'
      msg = 'Good Afternoon'
      picture = {avatarPonytail}
      />
    </User__Feedback>

  
    <Card picture = {shonenpic}
     title = 'Shonen anime targets young male audiences and often features action, adventure, and coming-of-age stories.' 
     info = 'Examples include'
     msg = '"Naruto," "One Piece," and "Dragon Ball".'   
    >
      
    </Card>
     
     
   <Card picture = {seinenpic}
    title = 'Shojo anime is aimed at young female audiences and typically focuses on romance, drama, and character development.'
    info = 'Popular shojo series include'
    msg = '"Sailor Moon," "Fruits Basket," and "Ouran High School Host Club"'
   >
    
    </Card>
     
     <Card picture = {shojopic}
       title = 'Seinen anime caters to adult male viewers and tends to explore more mature themes, including psychological, thriller, and sci-fi elements.'
       info = 'Notable seinen titles include'
       msg = '>"Attack on Titan," "Death Note," and "Berserk"'
    >
      </Card>
     
      <Card picture = {isekaipic}
          title = 'Isekai anime revolves around characters being transported or reincarnated into a different world.'
          info = 'This genre has gained significant popularity in recent years, with series like '
          msg = '"Sword Art Online," "Re:Zero," and "Overlord".'
      >
      </Card> 
    </div>
  )
}

//rooting
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(App())

// create a zip folder of Public and src folders 





// const App = function(props){
//   return(
//     <div><h1>Welcome to React function Components {props.name}</h1></div>
//   )
// }

//create a prop in a constant
// const myElement = <App name ='Martha' />
//rotting
// ReactDOM.render(
//   myElement,document.querySelector('#root')
// )
