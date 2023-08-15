import React from 'react'
import axios from 'axios'
import Search_Input from './Searchinput'
import Images__List from './ImageList'
class App extends React.Component{

    //set a state to store the response images in an array
    state = {images: []}

   onSearchSubmit = async(entry) => {
       const response = await axios.get(`https://pixabay.com/api/?key=38740922-8e17a10d46592304a386ec6d0&q=${entry}&image_type=photo`)
        //set states to collect and transfer images
        this.setState({images:response.data.hits})
   }
    render(){
        return(
                    <div className='ui container' style={{marginTop: '2em'}}>
                        <h1 className='ui title' style={{textAlign:'center',color:'blue' }}>Welcome to image search App</h1>
                        <Search_Input onSearchSubmit={this.onSearchSubmit}/>
                        <p>There are {this.state.images.length}</p>
                        <Images__List images={this.state.images}/>
                        
                    </div>
                )
            }
 }
export default App