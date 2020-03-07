import React from 'react';
import { Spin } from 'antd';

export const Loader = () => {
    return (
        <div className='custom-loader' >
            <Spin size="large" />
        </div>
    )
}
