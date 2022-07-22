import { useState } from "react";
import { useRef } from "react";
import { Card } from "react-bootstrap";

export default function CommentSection({ movieComments, movieTitle }) {
  // Set movieComments to a useState
  const [stateMovieComments, setStateMoviesComments] = useState(movieComments);
  console.log(stateMovieComments);

  // return content based on if there are comments or not
  const handleComments = (numComments) => {
    if (numComments.length <= 0) {
      return (
        <h1 style={{ color: "yellow" }}>No comments here =( be the first!</h1>
      );
    } else {
      return stateMovieComments.map((comment) => {
        return (
          <Card key={comment.user + comment.comment} className="m-2">
            <div className="card-body p-5">
              <h5 className="card-title">{comment.user}</h5>
              <p className="card-text">{comment.comment}</p>
              <p className="card-text">{"⭐".repeat(comment.rating)}</p>
            </div>
          </Card>
        );
      });
    }
  };

  // create notification requiring user to enter at least name
  const [alertStyles, setAlertStyles] = useState({
    position: "fixed",
    bottom: "0px",
    "textAlign": "center",
    width: "35%",
    "minHeight": "40px",
    "borderRadius": "4px",
    display:"none"
  });
  // updates and posts comments with user submission
  const userName = useRef("name");
  const userComment = useRef("comment");
  console.log(userName.current.value);
  const addComment = () => {
    if (userComment.current.value === "") {
      setAlertStyles({
        position: "fixed",
        bottom: "0px",
        "textAlign": "center",
        width: "35%",
        "minHeight": "40px",
        "borderRadius": "4px",
      })
    } else {
      setAlertStyles({
        position: "fixed",
        bottom: "0px",
        "textAlign": "center",
        width: "35%",
        "minHeight": "40px",
        "borderRadius": "4px",
        display:"none"
      })
      setStateMoviesComments([
        ...movieComments,
        { user: userName.current.value, comment: userComment.current.value },
      ]);
      const commentObj = {
        movie: movieTitle,
        user: userName.current.value,
        comment: userComment.current.value,
        rating: 5.9,
      };
      fetch("https://movies-nodeapi.herokuapp.com/movies/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentObj),
      });
    }


    // post comment to movie comment section
    // axios.post(`http://movies-nodeapi.herokuapp.com/movies/comment`, {data:{movie:"Bleeding Steel",name:"Mr.bill"}})
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
  };

  return (
    <>
      <form>
        <div className="form-group">
          <input
            ref={userName}
            className="form-control"
            id="email"
            placeholder="Enter Name"
          ></input>
        </div>
        <br></br>
        <div className="form-group">
          <textarea
            ref={userComment}
            className="form-control"
            rows="5"
            id="*comment"
            placeholder="Enter Comment"
            required="true"
          ></textarea>
        </div>
        <br></br>
        <div className="btn btn-info " onClick={addComment}>
          Submit
        </div>
        <div class="alert alert-warning" style={alertStyles} role="alert">
          <p>Please enter a Comment</p>
        </div>
      </form>
      {handleComments(movieComments)}
    </>
  );
}
