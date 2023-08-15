import React from 'react'

class Search_Input extends React.Component{
    // onInputChange(event){
    //     let s = event.target.value
    //     console.log(s) //test
    // }
    //replace with an inline function onChanege


    //IMPORTANT onSubmit form
    //initalize state as an empty string 
    state = { entry: ''}
    //call onSubmit method when pressed enter
    onSubmit = (event) =>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
            <div className='ui segment' style={{margin:'2%'}}>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className='ui field'>
                        <div className='ui massive icon input'>
                            <input type='text' placeholder='Type your search...'
                            onChange={(event)=>{this.setState({entry:event.target.value})}}
                            value={this.state.entry}
                            />
                            <i className='ui icon search'></i>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default Search_Input