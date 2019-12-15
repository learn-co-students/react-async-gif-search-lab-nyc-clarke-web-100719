import React, {Component} from 'react'
// the App component should render out the GifListContainer component 


class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchImages(this.state.searchTerm)
    }
  
  render() {
      return (
          <div className="col-sm-3">
            <form onSubmit={this.handleSubmit} className="form-group">
                <input type="text" className="form-control" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                <input type="submit" className="btn btn-success" value="Find Gifs"></input>
            </form>
          </div>
      )
  }  
}

export default GifSearch
