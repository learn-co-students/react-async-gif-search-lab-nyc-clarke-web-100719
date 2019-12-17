import React from 'react';

const GifList = (props) => {

    function renderGifs() {
        return props.gifs.map(gif => <li key={gif.slug}><img src={gif.images.original.url} alt={gif.slug} /></li>)
    }

    
    return(
        <div>
            <ul>
                {renderGifs()}
            </ul>
        </div>
    )
}

export default GifList
