import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getAllNewsFromSourceAction, clearAllNewsData } from '../actions';
import NewsList from './NewsList';
import { Loader } from '../common';
import { Link } from 'react-router-dom';

const NewsPage = (props) => {
    useEffect(() => {
        props.clearAllNewsData()
        props.getAllNewsFromSourceAction(props.match.params.id)
    }, [])

    const newsListHandler = () => {
        let { news } = props;
        if (news) {
            return <NewsList list={news} />
        }
        return <Loader />
    }
    return (
        <div>
            <Link to='/' className="back-btn"><ArrowLeftOutlined style={{ fontSize: '28px' }} /></Link>
            <div className='list-container'>
                {newsListHandler()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}
export default connect(mapStateToProps, { getAllNewsFromSourceAction, clearAllNewsData })(NewsPage)