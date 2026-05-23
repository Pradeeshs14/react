import React, { useRef, useState } from "react";

function Task7() {

  // Image State

  const [profileImage, setProfileImage] = useState(null);

  // Like State

  const [likes, setLikes] = useState(0);

  const [liked, setLiked] = useState(false);

  // Comment State

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  // useRef for File Input

  const fileInputRef = useRef();

  // Handle Image Upload

  const handleImageUpload = (event) => {

    const file = event.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setProfileImage(imageUrl);

    }

  };

  // Like Function

  const handleLike = () => {

    if (liked) {

      setLikes(likes - 1);

      setLiked(false);

    } else {

      setLikes(likes + 1);

      setLiked(true);

    }

  };

  // Add Comment

  const addComment = () => {

    if (comment.trim() !== "") {

      setComments([...comments, comment]);

      setComment("");

    }

  };

  return (

    <div className="container">

      <div className="card">

        <h1>Profile Upload</h1>

        {/* Profile Image */}

        <div className="image-container">

          {
            profileImage ? (

              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />

            ) : (

              <div className="placeholder">
                No Image
              </div>

            )
          }

        </div>

        {/* Upload Button */}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />

        {/* Like Section */}

        <div className="like-section">

          <button
            className={liked ? "liked" : ""}
            onClick={handleLike}
          >
            ❤️ Like
          </button>

          <p>{likes} Likes</p>

        </div>

        {/* Comment Section */}

        <div className="comment-section">

          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />

          <button onClick={addComment}>
            Add Comment
          </button>

        </div>

        {/* Display Comments */}

        <div className="comments-list">

          {
            comments.map((item, index) => (

              <p key={index} className="comment">

                {item}

              </p>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Task7;