import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Login, Main, Profile, News } from './views'
import { selectLoggedIn } from './slices/userSlice'

import styles from './App.module.scss'

function App() {
    const logged = useSelector(selectLoggedIn)

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/profile">
                        {logged ? <Profile /> : <Redirect to="/login" />}
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
