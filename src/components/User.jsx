import PropTypes from 'prop-types';
import css from './User.module.css';
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
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={imageSrc}
          alt={cardTitle}
          width="200"
          className={css.avatar}
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{cardTitle}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.listItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
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
