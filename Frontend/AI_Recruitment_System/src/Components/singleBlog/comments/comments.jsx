import React, { useState } from 'react';
import './comments.css'; 

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Cody Fisher',
      time: '1 sec ago',
      text: 'Amet minim mollit non deserunt.',
      replies: []
    },
    {
      id: 2,
      user: 'Bessie Cooper',
      time: '15 min ago',
      text: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      replies: [
        {
          id: 3,
          user: 'Bessie Cooper',
          time: '10 min ago',
          text: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          replies: [
            {
              id: 4,
              user: 'Bessie Cooper',
              time: '8 min ago',
              text: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 5,
      user: 'Bessie Cooper',
      time: '15 min ago',
      text: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      replies: []
    },
    {
      id: 6,
      user: 'Bessie Cooper',
      time: '10 min ago',
      text: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      replies: []
    }
  ]);
  
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      user: 'Guest User',
      time: 'Just now',
      text: commentText,
      replies: []
    };
    
    setComments([newComment, ...comments]);
    setCommentText('');
  };
  
  const handleReplyClick = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
    setReplyText('');
  };
  
  const handleReplySubmit = (e, parentComment) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    
    const newReply = {
      id: Date.now(),
      user: 'Guest User',
      time: 'Just now',
      text: replyText,
      replies: []
    };
    
    const updateReplies = (commentsArray, targetId) => {
      return commentsArray.map(comment => {
        if (comment.id === targetId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply]
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateReplies(comment.replies, targetId)
          };
        }
        return comment;
      });
    };
    
    setComments(updateReplies(comments, parentComment.id));
    setReplyingTo(null);
    setReplyText('');
  };
  
  const renderComments = (commentsArray, isNested = false) => {
    return commentsArray.map(comment => (
      <div key={comment.id} className="comment">
        <div className="comment-user">
          <div className="avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="user-info">
            <span className="username">{comment.user}</span>
            <span className="timestamp">{comment.time}</span>
          </div>
        </div>
        
        <div className="comment-text">{comment.text}</div>
        
        <div className="comment-actions">
          <button 
            className="reply-button" 
            onClick={() => handleReplyClick(comment.id)}
          >
            <svg className="reply-icon" width="16" height="16" viewBox="0 0 24 24" fill="#0070f3">
              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
            </svg>
            Reply
            {comment.replies.length > 0 && (
              <span className="reply-count">({comment.replies.length})</span>
            )}
          </button>
        </div>
        
        {replyingTo === comment.id && (
          <form className="reply-form" onSubmit={(e) => handleReplySubmit(e, comment)}>
            <input
              className="reply-input"
              placeholder="Share your thoughts on this comment..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button type="submit" className="post-button">Post Reply</button>
          </form>
        )}
        
        {comment.replies.length > 0 && (
          <div className="nested-comments">
            {renderComments(comment.replies, true)}
          </div>
        )}
      </div>
    ));
  };
  
  return (
    <div className="comments-container">
      <h2 className="comments-header">Write a Comment</h2>
      
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          className="comment-input"
          placeholder="Share your thoughts on this post?"
          rows="4"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit" className="post-button">Post A Comment</button>
      </form>
      
      <div className="comments-header">Comments</div>
      <div className="comments-list">
        {renderComments(comments)}
      </div>
    </div>
  );
};

export default CommentsSection;