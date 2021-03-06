import { useState } from 'react'
import { getGenres, getTracks, filterTracksByGenre } from '../lib/api'

import Tabs from "./Tabs"
import Tracks from "./Tracks"





const TracksByGenre = ({ items }) => {
	// const [stateVariable, setStateFunction] = useState(initValue)
    const [activeGenre, setActiveGenre] = useState("Rock");
	const genres = getGenres();


    return <div>
        <h2>Top Songs by Genre</h2>
        <Tabs 
            items={genres}
            activeItem ={activeGenre}
            clickHandler = {setActiveGenre}
         />

        <Tracks 
            items = {filterTracksByGenre(items, activeGenre)}
        />
    </div>
}
export default TracksByGenre;