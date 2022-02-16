import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import { Tweet } from './components/Tweet';
import AppRoutes from './Routes';

function App() {

  const [tweets, setTweets] = useState <string[]> ([]);

  const [count, setCount] = useState(0);

  function createTweet(){
    setCount(count + 1);
    setTweets([...tweets, `Tweet ${count}` ])
  }
 
  return (
    
    <div className="App">
      <Header />
      <button
        onClick={createTweet}
        style={{
          display: 'flex',
          margin: '1vmin 1vmin 1vmin auto'
        }}
      >
        Add tweet
      </button>
      <AppRoutes />
      
      {
        tweets.map(tweet => {
          return <Tweet text={tweet} />
        })
      }
    </div>
  );
}

export default App
