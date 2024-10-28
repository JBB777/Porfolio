import './Card.scss';
import Tag from '../Tag/Tag';

function Card({ title, description, tags, repo }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card__tags">
        {tags.map((tag, index) => {
          return <Tag title={tag} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Card;
