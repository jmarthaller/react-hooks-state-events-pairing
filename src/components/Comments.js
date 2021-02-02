import video from "../data/video.js";
import { useState } from "react";

function Comments({user, comment}) {
    const [commentUpvote, setCommentUpvote] = useState(0);
    const [commentDownvote, setCommentDownvote] = useState(0);
    let [removeComment, setRemoveComment] = useState(false)



    const [searchTerm, setSearchTerm] = useState('')

    const filteredComments = video.comments.filter((comment) => {
        return comment.user.toLowerCase().includes(searchTerm.toLowerCase());
    })

    const userComments = filteredComments.map((comment) => {
        return <Comments user={comment.user} />;
      });
    
      function handleChange(event) {
        setSearchTerm(event.target.value);
      }
    




    function handleCommentUpvoteClick() {
        setCommentUpvote((commentUpvote) => commentUpvote + 1)
    }

    function handleCommentDownvoteClick() {
        setCommentDownvote((commentDownvote) => commentDownvote + 1);
    }

    function handleRemoveCommentClick() {
        setRemoveComment(removeComment = !removeComment);
    }


    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleChange} />
            <h4>{user}</h4>
            <p>{comment}</p>
            <button onClick={handleCommentUpvoteClick}>{commentUpvote} 👍</button>
            <button onClick={handleCommentDownvoteClick}>{commentDownvote} 👎</button>
            { removeComment ? null : <button onClick={handleRemoveCommentClick}>Remove Comment</button>}
        </div> 
    )
}



export default Comments;