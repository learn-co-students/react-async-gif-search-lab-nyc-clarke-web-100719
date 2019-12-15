import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
// the App component should render out the GifListContainer component 


class GifListContainer extends Component {

  
    state = {
        gifList: []
    }

    componentDidMount() {
        this.fetchImages()
    }


    fetchImages = (searchTerm = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&rating=g`)
        .then(resp => resp.json())
        .then(json => this.setState({
            gifList: json.data.slice(0,3)
        }))

    }

  
  render() {
      console.log(this.state)
      return (
        <div className="container-fluid">
            <div className="row">
                < GifList gifList={this.state.gifList}/>
                < GifSearch fetchImages={this.fetchImages}/>
            </div>
        </div>
      )
  }  
}

export default GifListContainer
