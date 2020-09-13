import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MainPage from './page/MainPage';

export default function TodoList() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}/>

        </Switch>
    )
}
