import React from 'react'
import { GifGridItem } from './GifGridItem';/* 
import { getGifs } from '../helpers/getGifs'; */
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  

  const {data: images, loading} = useFetchGifs(category);

  return (
    <>
    <h3> {category} </h3>

    {loading && 'Loading...'}
    {<div className="card-grid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img}/>
          })}
        
    </div>}
    </>
  )
}
