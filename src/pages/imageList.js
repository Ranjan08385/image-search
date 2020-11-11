import React from 'react'
import './Style.css'
import ImageCard from './ImageCard'

function imageList({data}) {
    const displayImage = data.map(images => {
        return (
            <div key={images.id}>
                <ImageCard image={images} />
            </div>
        )
    })
    return (
        <div className="image__list">
            {displayImage}
        </div>
    )
}

export default imageList
