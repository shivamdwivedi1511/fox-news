import React from 'react';
import { connect } from 'react-redux';
import { List, Loader } from '../common';

const Home = (props) => {
    const listHandler = () => {
        let { sources } = props;
        if (sources && sources.sources && sources.sources.length) {
            return <List data={sources.sources} />
        }
        return <Loader />
    }
    return (
        <div>
            <div className="container">
                {listHandler()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sources: state.sources
    }
}
export default connect(mapStateToProps)(Home)