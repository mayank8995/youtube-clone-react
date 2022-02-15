import React,  {useState, useEffect} from 'react'

import tmdbApi from 'api/tmdb';
import MediaCard from './MediaCard';

export default function Mediaslider({mediaType,title,path, params={}, isLarge}){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const fectchData = async () => {
            const json = await tmdbApi.get(path, params);
            setItems(json.results);
        }
        fectchData()
    },[])
    console.log(items)
    return <div className="media-slider">
    <div className="media-slider__cards">
      {items.map((media) => (
        <MediaCard
          isLarge={isLarge}
          key={media.id}
          media={media}
          mediaType={media.media_type || mediaType}
        />
      ))}
    </div>
  </div>
}