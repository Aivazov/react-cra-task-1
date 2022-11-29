import PropTypes from 'prop-types';

export default function Friends({
  firstFriendPic,
  firstFriendName,
  firstFriendStatus,
  firstFriendId,
  secondFriendPic,
  secondFriendName,
  secondFriendStatus,
  secondFriendId,
  thirdFriendPic,
  thirdFriendName,
  thirdFriendStatus,
  thirdFriendId,
  fourthFriendPic,
  fourthFriendName,
  fourthFriendStatus,
  fourthFriendId,
  fifthFriendPic,
  fifthFriendName,
  fifthFriendStatus,
  fifthFriendId,
}) {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status">{firstFriendStatus}</span>
        <img
          className="avatar"
          src={firstFriendPic}
          alt="User avatar"
          width="48"
        />
        <p className="name">{firstFriendName}</p>
      </li>
      <li className="item">
        <span className="status">{secondFriendStatus}</span>
        <img
          className="avatar"
          src={secondFriendPic}
          alt="User avatar"
          width="48"
        />
        <p className="name">{secondFriendName}</p>
      </li>
      <li className="item">
        <span className="status">{thirdFriendStatus}</span>
        <img
          className="avatar"
          src={thirdFriendPic}
          alt="User avatar"
          width="48"
        />
        <p className="name">{thirdFriendName}</p>
      </li>
      <li className="item">
        <span className="status">{fourthFriendStatus}</span>
        <img
          className="avatar"
          src={fourthFriendPic}
          alt="User avatar"
          width="48"
        />
        <p className="name">{fourthFriendName}</p>
      </li>
      <li className="item">
        <span className="status">{fifthFriendStatus}</span>
        <img
          className="avatar"
          src={fifthFriendPic}
          alt="User avatar"
          width="48"
        />
        <p className="name">{fifthFriendName}</p>
      </li>
    </ul>
  );
}

// Friends.propTypes = {};
