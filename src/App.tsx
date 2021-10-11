import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login, Main, Profile, News } from './views'

import styles from './App.module.scss'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/views">
                        <News />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
