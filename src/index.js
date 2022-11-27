import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import dataStats from "./data/data.json";
import reportWebVitals from './reportWebVitals';
// import user from './user.json';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const data = [
  {
    id: 'id-1',
    url: 'https://cdn.pixabay.com/photo/2017/08/15/21/28/bird-2645674_960_720.jpg',
    title: 'Ara parrots',
  },
  {
    id: 'id-2',
    url: 'https://cdn.pixabay.com/photo/2018/09/10/09/11/bird-3666579_960_720.jpg',
    title: 'Flamingos',
  },
];

// const painting = data[1].url;
// dataStats.map(el => console.log(el.id));

function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imageSrc} alt={props.cardTitle} width="480" />
      <h2>{props.cardTitle}</h2>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(<Painting imageSrc={painting.url} cardTitle={painting.title} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
