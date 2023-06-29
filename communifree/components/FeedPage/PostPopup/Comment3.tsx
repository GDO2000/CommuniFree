import "./Comment.css";

export default function Comment3({ comments }) {
  let i = comments.length;
  return (
    <div className="comment">
      <h3 className="commentHeading">Chris</h3>
      <p className="commentBody">{comments[i - 3].comment}</p>
    </div>
  );
}
