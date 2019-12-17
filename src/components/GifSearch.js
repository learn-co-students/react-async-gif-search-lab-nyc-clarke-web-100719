import React from 'react';

const GifSearch = (props) => {
    const {handleSubmit, search, handleChange} = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a search term:</label>
                <input type="text" name="search" value={search} onChange={handleChange} />
                <input type="submit" value="Find Gifs" />
            </form>
            
        </div>        
    )
 }

 export default GifSearch