import PropTypes from 'prop-types';

const FriendsList = function ({ friends }) {
  return (
    <ul className="friend-list">
      Another attempt to render FriendsList elegantly
      <li className="item">
        <span className="status">{friends[0].isOnline}</span>
        <img
          className="avatar"
          src={friends[0].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[0].name}</p>
      </li>
      <li className="item">
        <span className="status">{friends[1].isOnline}</span>
        <img
          className="avatar"
          src={friends[1].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[1].name}</p>
      </li>
      <li className="item">
        <span className="status">{friends[2].isOnline}</span>
        <img
          className="avatar"
          src={friends[2].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[2].name}</p>
      </li>
      <li className="item">
        <span className="status">{friends[3].isOnline}</span>
        <img
          className="avatar"
          src={friends[3].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[3].name}</p>
      </li>
      <li className="item">
        <span className="status">{friends[4].isOnline}</span>
        <img
          className="avatar"
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
