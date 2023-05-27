import React from 'react'
import Games from './features/Games/Games'
import GameOverview from './features/Games/GameOverview'
import LeftPanel from './features/Games/LeftPanel'
import SearchEngine from './features/Games/SearchEngine'
import ScreenshotsPage from './features/Games/ScreenshotsPage'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import './styles/style.scss'

function App() {
  return (
    <Router>
      <div className="logo-container">
          <h2 className='logo-name'>GameBust</h2>
      </div>
      <SearchEngine />
      <LeftPanel />
      <Switch>
        <Route exact path="/">
          <div>
            <Games />
          </div>
        </Route>
        <Route exact path="/game/:gameName" component={GameOverview} />
        <Route exact path="/game/:gameName/screenshots" component={ScreenshotsPage}/>
      </Switch>
    </Router>
  )
}

export default App