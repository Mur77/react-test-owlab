import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { CommonLayout } from './layouts/CommonLayout'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/views">
                        <Views />
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
