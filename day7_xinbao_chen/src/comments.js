import React from 'react'


const User = function(props){
    return(
        <div className='comment'>
            <a href='' className ='avatar'>
            <img src= {props.picture} alt="avator of women"/>
            </a>
            <div className='content'>
                <a className='author'>
                    {props.name}
                </a>
                <div>
                    <span className='metadata'>Today at {props.date}</span>
                </div>
                <div className='text'> {props.msg}
                </div>
            </div>
        </div>
    )
}

export default User