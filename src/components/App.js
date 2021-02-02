import video from "../data/video.js";
import Comments from "./Comments";
import { useState } from "react";


function App() {
  const [upvotes, setUpvotes] = useState(9210)
  const [downvotes, setDownvotes] = useState(185)
  let [hideComments, setHideComments] = useState(true)

  function handleHideCommentsClick() {
    setHideComments(hideComments = !hideComments)
  }

  function handleUpvoteClick() {
    setUpvotes((upvotes) => upvotes + 1)
  }

  function handleDownvoteClick() {
    setDownvotes((downvotes) => downvotes + 1)
  }

  const commentsList = video.comments.map((comment) => {
    return <Comments
      key={comment.id}
      user={comment.user}
      comment={comment.comment}
    />
  })

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpvoteClick}>{upvotes} 👍</button>
      <button onClick={handleDownvoteClick}>{downvotes} 👎</button>

      <button onClick={handleHideCommentsClick}>{(hideComments ? 'Hide' : 'Show') + " Comments"}</button>
      <div className='all-comments'>
      <h3>{video.comments.length} Comments</h3>
        {hideComments ? commentsList : null}
      </div>
    </div>

  );
}

export default App;