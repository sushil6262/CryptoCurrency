import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/Header';
import List from './components/list/List'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Detail from './components/detail/Detail'
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={List} />
                            <Route path="/currency/:id" exact component={Detail} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));