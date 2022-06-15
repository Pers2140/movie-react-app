import React from 'react'

export default function Player({style, moviesrc,setMovie}) {
    
    const closePlayer = () =>{
        setMovie('default')
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
       } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
       } else if (document.webkitCancelFullScreen) {
         document.webkitCancelFullScreen();
       }
    }
    const changeFullScreen = () => {

        if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
         if (document.documentElement.requestFullscreen) {
           document.documentElement.requestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
           document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
           document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
       } else {
          if (document.cancelFullScreen) {
             document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
       }
    }
    return (

    <>
        <div className="movie-player" style={style}>
        <div className="cover-bar">
            <div style = {{"fontSize":"32px",position:"absolute",right:0}} onClick={changeFullScreen} className="toggle-fulscreen">↗️</div>
            <div style = {{"fontSize":"32px",position:"absolute",left:0}} onClick={closePlayer} className="return-button">⬅️</div>
        </div>
        <iframe title={"this is unique"}  style={{width:"100%",height:"100%"}}src={moviesrc}></iframe> 
        </div>
    </>
  )
}
