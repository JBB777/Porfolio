import './Tag.scss';

function Tag({ title, idx }) {
  return (
    <div className="tag" key={idx}>
      {title}
    </div>
  );
}

export default Tag;
