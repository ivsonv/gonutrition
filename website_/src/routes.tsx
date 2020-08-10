import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ProfileList from './pages/ProfileList';
import ProfileRegister from './pages/ProfileRegister';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profiles" component={ProfileList} />
            <Route exact path="/profile/register" component={ProfileRegister} />
        </BrowserRouter>
    )
}

export default Routes;