import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

export default function Layout(props) {
    return (
        <Fragment>
            <Link to='/'><h1 className="main-heading">Fox News</h1></Link>
            {props.children}
        </Fragment>
    )
}
