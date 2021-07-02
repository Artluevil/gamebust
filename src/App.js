import React from 'react'
import Games from './features/Games/Games'
import GameOverview from './features/Games/GameOverview'
import LeftPanel from './features/Games/LeftPanel'
import SearchEngine from './features/Games/SearchEngine'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
        <Route path="/game/:gameName" component={GameOverview}/>
      </Switch>
    </Router>
  )
}

export default App