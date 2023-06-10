import React from 'react'
import Games from './features/Games/Games'
import GameOverview from './features/Games/GameOverview'
import LeftPanel from './features/Games/LeftPanel'
import MobileMenu from './features/Games/MobileMenu'
import SearchEngine from './features/Games/SearchEngine'
import ScreenshotsPage from './features/Games/ScreenshotsPage'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import './styles/style.scss'
import { useState, useEffect } from 'react';


function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  function mobilePanelLogic(){
    if(windowSize[0] > 1000) {
      return <LeftPanel />
    } else {
      return <MobileMenu />
    }
  }

  return (
    <Router>
      <div className="logo-container">
        <h2 className='logo-name'>GameBust</h2>
      </div>
      <SearchEngine />
      {mobilePanelLogic()}
      <Switch>
        <Route exact path="/">
          <div>
            <Games />
          </div>
        </Route>
        <Route exact path="/game/:gameName" component={GameOverview} />
        <Route exact path="/game/:gameName/screenshots" component={ScreenshotsPage} />
      </Switch>
    </Router>
  )
}

export default App