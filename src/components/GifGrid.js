import React from 'react'
import GifGridltem from "./GifGridltem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const GifGrid =({category})=>{

    const { loading, data:images } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {loading && <p> Loading</p>}
            <div className="card-grid">
               {
                   images.map(img => <GifGridltem key={img.id} {...img} />)
               }
            </div>
       </>
    )

}

export default GifGrid
