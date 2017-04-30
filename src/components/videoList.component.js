import React from 'react';
import List from './videoListItem.component'

const videoListComponent = ({ videos, onVideoSelect }) => {

    const videoItems = videos.map((video) => {
        return <List
            onVideoSelect={onVideoSelect}
            key={video.etag}
            video={video} />
    });

    return (
        <ul className="list-group">
            {videoItems}
        </ul>
    );
}

export default videoListComponent;