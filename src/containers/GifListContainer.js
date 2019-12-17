import React from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';



export default class GifListContainer extends React.Component {
    state = {
        gifs: [],
        search: ''
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value.toLowerCase().replace(/\s/g, '-')
        })
    }

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`) 
        .then(resp => resp.json())
        .then(gifs => {
            if (gifs.data) {
                this.setState({
                    gifs: gifs.data.slice(0,3)
                })
            } else {
                alert('sorry we could not find enough')
            }

        }
    )}

    componentDidMount() {
        
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}