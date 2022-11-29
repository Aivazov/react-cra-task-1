import PropTypes from 'prop-types';
import defaultImage from '../components/default-image.jpg';

export default function UserRendering({
  imageSrc = defaultImage,
  cardTitle,
  userName = 'Alas, name is undefined',
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={imageSrc} alt={cardTitle} width="200" className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{cardTitle}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserRendering.propTypes = {
  imageSrc: PropTypes.string,
  cardTitle: PropTypes.string,
  userName: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
