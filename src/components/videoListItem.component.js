import React from 'react'

const videoListItemComponent = ({video, onVideoSelect}) => {  

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item margin">
        <div className="video-list media">
          <div className="media-left">
            <img
              className="media-object"  
              height="auto"            
              src={video.snippet.thumbnails.default.url}
              alt="video"
              />
          </div>  
          <div className="media-body">
              <div className="media-heading">
                  {video.snippet.title}
              </div>
         </div>       
        </div> 
    </li>
  )
}

export default videoListItemComponent