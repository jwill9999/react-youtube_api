import React from 'react';

const videoDetailComponent = ({video}) => {

  if (!video) {
    return <div><h1>Loading .....</h1></div>
  }

  let videoUrl = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoUrl}`

  return (
    
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item clearfix" allowFullScreen src={url}/>
    </div>
   
  )
}

export default videoDetailComponent