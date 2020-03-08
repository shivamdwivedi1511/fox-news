import React from 'react';
import { Card, Row, Col, Empty } from 'antd';
import { placeholder, emptyData } from '../constant';

export default function NewsList(props) {

    const dateString = (date) => {
        return new Date(date).toDateString();
    }

    const newsListhandler = () => {
        if (props.list.length) {
            return props.list.map(item => <Col span={12}>
                <Card className='news-card' title={<a href={item.url}>{item.title}</a>} bordered={false} cover={<img alt="example" src={item.urlToImage || placeholder} />} hoverable>
                    <p>{dateString(item.publishedAt)}</p>
                    {item.description}
                </Card>
            </Col>)
        }
        else return <div className='container'><Empty
            image={emptyData}
            imageStyle={{
                height: 400,
            }} />
        </div>

    }


    return (
        <div className="site-card-wrapper category-list-wrapper">
            <Row gutter={16}>
                {newsListhandler()}
            </Row>
        </div>

    )
}

