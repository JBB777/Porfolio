import './Card.scss';
import Tag from '../Tag/Tag';

function Card({ title, description, tags, repo }) {
  return (
    <div className="card">
      <div className="card__title">
        <h3>{title}</h3>
        <div className="card__tags">
          {tags.map((tag, index) => {
            return <Tag title={tag} key={index} />;
          })}
        </div>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
