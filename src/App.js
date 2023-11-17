import './App.css';
import React, {useState } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =  ()=> {
  require('dotenv').config()
  const apikey=process.env.REACT_APP_NEWS_APIKEY;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        
        {/* <News setProgress=setProgressapikey={apikey} country='in' category='science'/> */}
  <BrowserRouter>
  <Navbar/>
  <div>
      <LoadingBar
        color='grey'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
   <Routes>
  <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} country='in' category='' pagesize='12'/>}></Route>
  <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} country='in' key='business' category='business' pagesize='12'/>} ></Route>
  <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} country='in' key='sports' category='sports' pagesize='12'/>} ></Route>
  <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} country='in' key='science' category='science' pagesize='12'/>} ></Route>
  <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} country='in' key='health' category='health' pagesize='12'/>} ></Route>
  <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} country='in' key='entertainment' category='entertainment' pagesize='12'/>} ></Route>
  </Routes>
  </BrowserRouter>
    </div>
    )
  }

export default App;