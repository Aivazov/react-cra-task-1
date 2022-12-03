import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendsList = function ({ friends }) {
  return (
    <ul className={css.friendsList}>
      <li className={css.item_1}>
        <span className={friends[0].isOnline ? css.online : css.offline}>
          {friends[0].isOnline}
        </span>
        <img
          className={css.avatar}
          src={friends[0].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[0].name}</p>
      </li>
      <li className={css.item_2}>
        <span className={friends[1].isOnline ? css.online : css.offline}>
          {friends[1].isOnline}
        </span>
        <img
          className={css.avatar}
          src={friends[1].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[1].name}</p>
      </li>
      <li className={css.item_3}>
        <span className={friends[2].isOnline ? css.online : css.offline}>
          {friends[2].isOnline}
        </span>
        <img
          className={css.avatar}
          src={friends[2].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[2].name}</p>
      </li>
      <li className={css.item_4}>
        <span className={friends[3].isOnline ? css.online : css.offline}>
          {friends[3].isOnline}
        </span>
        <img
          className={css.avatar}
          src={friends[3].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[3].name}</p>
      </li>
      <li className={css.item_5}>
        <span className={friends[4].isOnline ? css.online : css.offline}>
          {friends[4].isOnline}
        </span>
        <img
          className={css.avatar}
          src={friends[4].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[4].name}</p>
      </li>
    </ul>
  );
};

export default FriendsList;
