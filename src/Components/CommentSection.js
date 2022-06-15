import React from 'react'
import { useRef } from 'react';
import {Card } from "react-bootstrap";

export default function CommentSection({movieComments,movieTitle}) {
    console.log(movieTitle)
    // return content based on if there are comments or not
    const handleComments = (numComments) =>{
        if(numComments.length <= 0){
          return (
              <h1>No comments here =( be the first!</h1>
          );
        }else{
          return (movieComments.map((comment) => {
            return <Card key={comment.user+comment.comment} className="m-2">
              <div className="card-body p-5">
                <h5 className="card-title">{comment.user}</h5>
                <p className="card-text">{comment.comment}</p>
                <p className="card-text">{"⭐".repeat(comment.rating)}</p>
              </div>
            </Card>;
          }))
        }
    }
    const userName = useRef('name')
    const userComment = useRef('comment')
    
    const submitComment = (movieTitle) => {
      console.log(userName)
      console.log(userComment)
    }
  return (
    <>
           <form onSubmit={submitComment}>
      <div>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={userComment} />
      </div>
      <div>
        <button>Add Meetup</button>
      </div>
    </form>
        {handleComments(movieComments)}
    </>
  )
}
