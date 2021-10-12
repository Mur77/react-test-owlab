import { useState } from 'react'
import { 
    BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch, 
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Login, Logout, Main, Profile, News } from './views'
import { selectLoggedIn } from './slices/userSlice'

function App() {
    const [url, setUrl] = useState('/')
    const logged = useSelector(selectLoggedIn)

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route
                        path="/profile"
                        render={() => {
                            setUrl('/profile')
                            return (
                                <>
                                    {logged ? <Profile /> : <Redirect to="/login" />}
                                </>
                            )
                        }}
                    />
                    <Route path="/login">
                        <Login prevUrl={url} />
                    </Route>
                    <Route 
                        path="/logout"
                        render={()=> (
                            <>
                                {logged ? <Logout /> : <Redirect to="/" />}
                            </>
                        )}
                    />
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
