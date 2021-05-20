import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom'
import Example from './Example'
import Student from './Student'
import about from './about';
import login from './login';
import change from './change';
import vistaUser from './vistaUser';
import vistaAdmin from './vistaAdmin';
import Delete from './delete';
import adminDel from './adminDel';
import adminCha from './adminCha';

ReactDOM.render (
(
    <BrowserRouter>
        <Router>
            <Switch>
                <Route exact path="/proyecto-final/public/" component={Example}/>
                <Route exact path='/proyecto-final/public/create' component={Student} />
                <Route exact path='/proyecto-final/public/about' component={about} />
                <Route exact path='/proyecto-final/public/login' component={login} />
                <Route exact path='/proyecto-final/public/change' component={change} />
                <Route exact path='/proyecto-final/public/inicioUser' component={vistaUser} />
                <Route exact path='/proyecto-final/public/inicioAdmin' component={vistaAdmin} />
                <Route exact path='/proyecto-final/public/delete' component={Delete} />
                <Route exact path='/proyecto-final/public/Adelete' component={adminDel} />
                <Route exact path='/proyecto-final/public/Achange' component={adminCha} />
            </Switch>
        </Router>
    </BrowserRouter>
), document.getElementById('app'));
