import logo from './logo.svg';

import UserRendering from './components/User';
import user from './user.json';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //
    // <div>
    //   <div>
    //     <img src={user.avatar} alt={user.tag} width="200" />
    //     <h1>{user.username}</h1>
    //     <p>@{user.tag}</p>
    //     <p>{user.location}</p>
    //   </div>
    //   <ul>
    //     <li>
    //       Followers
    //       <span>{user.stats.followers}</span>
    //     </li>
    //     <li>
    //       Views
    //       <span>{user.stats.views}</span>
    //     </li>
    //     <li>
    //       Likes
    //       <span>{user.stats.likes}</span>
    //     </li>
    //   </ul>
    // </div>
    // 
    <div className="App">
      <UserRendering
        imageSrc={user.avatar}
        cardTitle={user.tag}
        userName={user.username}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

export default App;
