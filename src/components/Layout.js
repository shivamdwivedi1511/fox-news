import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

export default function Layout(props) {
    return (
        <Fragment>
            <span className="main-heading"><Link to='/'>Fox News</Link></span>
            {props.children}
        </Fragment>
    )
}
