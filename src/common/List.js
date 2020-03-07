import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export const List = (props) => {
    const dataList = () => {
        let { data } = props;
        return data.map(s => <Col span={8}>
            <Link to={`/source/${s.id}`}><Card className='category-card' title={`${s.name}`} bordered={false} hoverable>
                {s.description}
            </Card>
            </Link>
        </Col>)
    }
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {dataList()}
            </Row>
        </div>
    )
}
