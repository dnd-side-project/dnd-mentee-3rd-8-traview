import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from '../routes/Home';
import NavBar from './NavBar/NavBar';
import Login from '../routes/Login';
import Upload from '../routes/Upload';
import Detail from '../routes/Detail';
import Area from '../routes/Area';
import Register from '../routes/Register';

const GlobalStyle = createGlobalStyle`
  body {
    color: #ffffff;
    background-color: #000000;
    font-family: Noto Sans KR;
  }
`;

const Container = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-bottom: 3rem;
`;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Container>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/upload" component={Upload} />
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route exact path="/area/:id" component={Area} />
                </Container>
            </Switch>
        </Router>
    );
}

export default App;
