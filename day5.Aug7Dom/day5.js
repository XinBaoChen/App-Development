console.log("Type your name")
let myText = document.querySelector('#userName p:nth-child(2)')
myText.style.color = 'red'

document.querySelector('.name1').style.backgroundColor = 'magenta'

// queryslectorall
let myName = document.querySelectorAll("#userName p")
for(let i = 0; i < myName.length; i++){
    myName[i].style.color = 'green'
    //change font size of all odd <p></p>
    if(i % 2 === 0){
      myName[i].style.fontSize = "2em"
    }
    
}

// innerhtml
let myDiv = document.querySelectorAll('p')[1]
myDiv.innerHTML = "New text content using <em><b>innerHTML</b></em>"

// classList.add()
document.querySelector('h1').classList.add('subtitle')

//testing parent/sibling/child
let listItem = document.querySelector("li:nth-child(2)")

//create element and text nodes
//step 1 create an element
let myPara = document.createElement("p")
//step 2 create a content
let mySentence = document.createTextNode("This is the text of the new paragraph")
//step 3a append the text node into the new element
myPara.appendChild(mySentence)
myPara.classList.add("subtitle")
//step 3b append the new element, with text ndoe, to the element
document.querySelector("div").appendChild(myPara)

//removing an element
let myItem = document.querySelector("ul")
myItem.removeChild(myItem.lastElementChild)

//events
let btn = document.querySelector('.btn1')
btn.onclick = function(){
    alert("Hi there!")
}

//guess a number
let randomNumber = function(){
    let randomNum = Math.ceil(Math.random()*9)
    return randomNum
}
let guessNumDiv = document.querySelector(".guessNumber")
let btnGuess = document.querySelector('.guessBTN')
btnGuess.addEventListener('click',function(){
    guessNumDiv.innerHTML = randomNumber()
})

//mouse events
let btnMouseEvent = document.querySelector("#btnMouseEvent");
let mouseOutDisplay = document.querySelector(".mouseOutEventDisplay");
let doubleClickDisplay = document.querySelector(".doubleClickDisplay");
let mouseoutCounter = 0;

btnMouseEvent.addEventListener("mouseout", function() {
  mouseoutCounter++;
  mouseOutDisplay.innerHTML += "Message for mouse out ";
});

btnMouseEvent.addEventListener("dblclick", function() {
  doubleClickDisplay.innerHTML += "Message for double click ";
});

//window event
let topIcon = document.querySelector(".top")
window.addEventListener("scroll",function(){
    let yPos = this.scrollY
    if(yPos > 100){
        topIcon.style.display='block'
    }
    else{
        topIcon.style.display="none"
    }
})