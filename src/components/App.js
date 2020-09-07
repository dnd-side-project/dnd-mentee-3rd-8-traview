import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from '../routes/Home';
import NavBar from './NavBar/NavBar';
import Login from '../routes/Login';
import Area from '../routes/Area';
import Register from '../routes/Register';
import Mypage from '../routes/Mypage';
import FollowPage from '../routes/FollowPage';
import { useStateValue } from '../StateProvider';

const GlobalStyle = createGlobalStyle`
  body {
    color: #ffffff;
    background-color: #000000;
    font-family: Noto Sans KR;
  }
`;

function App() {
    const [{ user }] = useStateValue();

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/area" component={Area} />
                    <Route exact path="/follow" component={FollowPage} />
                    {user && user.uid && (
                        <Route
                            exact
                            path={`/user/:${user.uid}`}
                            component={Mypage}
                        />
                    )}
                </>
            </Switch>
        </Router>
    );
}

export default App;
