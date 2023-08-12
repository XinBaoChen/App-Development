import React from 'react'
import {useState} from "react"

const MyForm = function(){
    // setState
    const [inputs, setInputs] = useState({})

    //input data
    const handleChange = function(event){
        const name = event.target.name
        const value = event.target.value
        setInputs(values =>({
            ...values,[name]:value
        }))
    }
    //select data
    const [myGender, setGender] = useState('female')
    const selectedGender = function(event){
        setGender(event.target.value)
    }

    //textArea
    const [textComments, setTextArea] = useState("")
    const submitComment = function(event){
        setTextArea(event.target.value)
    }
    //submit form
    const handleSubmit = function(event){
        event.preventDefault()
        alert(`Hello the name you entered was: ${inputs.username} \n Enterted age: ${inputs.enteredAge} \n Gender: ${myGender} \n Your comments: ${textComments}` )
    }
    
    return(
        <div>
            <form className='ui form' onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Form in ReactJS</legend>
                    <label>Enter your name: </label>
                    <input type='text' placeholder='Type your name' id="name" name='username' value={inputs.username} onChange ={ handleChange}/>

                    <label for='age'>Enter age: </label>
                    <input type='number' id='age' name='enteredAge' value={inputs.age} onChange={handleChange} />
                    {/* select gender */}
                    <div style={{marginTop: '1em'}}>
                            <label>Select gender</label>
                            <select value={myGender} onChange={selectedGender}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    {/* textArea */}
                    <div style={{marginTop:'1em'}}>
                        <textarea value={textComments} onChange={submitComment} placeholder='Type your comments..' />
                    </div>
                    {/* sumbit form */}
                    <div style={{marginTop: "1em"}}><input type='submit' className='ui button'/></div>
                </fieldset>
            </form>
        </div>
    )
}

export default MyForm