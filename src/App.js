import logo from './logo.svg';

import UserRendering from './components/User';
import DataStatsTask from './components/DataTask2';
import user from './data/user.json';
import dataStats from './data/data.json';
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

      <DataStatsTask
        id_1={dataStats[0].id}
        label_1={dataStats[0].label}
        percentage_1={dataStats[0].percentage}
        id_2={dataStats[1].id}
        label_2={dataStats[1].label}
        percentage_2={dataStats[1].percentage}
        id_3={dataStats[2].id}
        label_3={dataStats[2].label}
        percentage_3={dataStats[2].percentage}
        id_4={dataStats[3].id}
        label_4={dataStats[3].label}
        percentage_4={dataStats[3].percentage}
        id_5={dataStats[4].id}
        label_5={dataStats[4].label}
        percentage_5={dataStats[4].percentage}
      />
    </div>
  );
}

export default App;
