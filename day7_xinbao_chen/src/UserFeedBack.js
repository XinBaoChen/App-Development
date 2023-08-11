import React from 'react'

const User__Feedback = function(props){
    return (
        <div className='ui card'> 
          <div className='content'>
                <div className='header'>User Name</div>
                <div className='description' >{props.children}</div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon' style={{display:'block', width: '100%'}}>Add feedback</i>
          </div>
        </div>
    )
}

export default User__Feedback