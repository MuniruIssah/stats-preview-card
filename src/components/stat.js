import React from 'react';

const Stat = ({title,value}) => {
    return (
        <div className={'stat'}>
            <span className={'stat-value'}>{value}</span>
            <span className={'stat-label'}>{title}</span>
        </div>
    );
};

export default Stat;