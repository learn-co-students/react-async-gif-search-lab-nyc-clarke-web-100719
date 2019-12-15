import React, {Component} from 'react'
// the App component should render out the GifListContainer component 


class GifList extends Component {

    
    render() {
        return (
            <div className="col-sm-9">
                <ul>
                    { this.props.gifList.map(gif => <li><img src={gif.images.original.url} alt={gif.slug}/></li>) }
                </ul>

            </div>
        )
    }  
}

export default GifList
