import React from 'react'
import souther from './southern-hemisphere.jpg'
import nothern from './north-hemisphere.jpg'
import Ecuator from './Ecuadorian_Line.png'

const HemisphereDisplay = (props) => {
        const HemisphereResult = props.latitude
        let userLocataion = ''
        let picture = ''
        if(HemisphereResult >= 0){
            userLocataion = 'Northern Hemisphere!'
            picture = nothern
        }
        else if(HemisphereResult < 0){
            userLocataion = "Southern Hemisphere!"
            picture = souther
        }
        else{
            userLocataion = "Ecuadorian Line!"
            picture = Ecuator
        }

       
        return(
            <div>
                <p>Weclome to HemisphereDisplay</p>
                <p>You are at <span>{userLocataion}</span></p>
                <img src= {picture} style={{width:"50%"}}/>
            </div>
        )
    }

export default HemisphereDisplay;