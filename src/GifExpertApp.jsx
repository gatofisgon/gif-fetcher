import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [category, setCategory] = useState(['Sakura Card Captor']);

    return (

        <div>
            <h1>Gifs Fetching App</h1>
            <AddCategory setAnimes={setCategory}/>
            <hr />


            <ol>
                {category.map(anime => {
                    return <GifGrid 
                    category={anime} 
                    key={anime}
                    />
                })}
            </ol>
        </div>

    )
}

export default GifExpertApp;