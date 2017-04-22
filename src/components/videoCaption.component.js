import React from 'react'
import '../App.css';

const VideoCaption = (props) => {


  
  if(!props.video){
    return (
      <div className="panel panel-primary">
        <div id="divHeight" className="panel-heading ">
          <h3 className="panel-title pull-left">Loading ... </h3>
        </div>
        <div className="panel-body">Loading....</div>
   </div>
    ) 
    
  }  
  

  return (
  <div className="panel panel-primary">
    <div id="divHeight" className="panel-heading ">
      <h3 className="panel-title ">{(props.video.snippet.title).toLowerCase()}</h3>
    </div>
    <div className="panel-body "><b>{props.video.snippet.description}</b></div>
  </div>
  )

}

export default VideoCaption