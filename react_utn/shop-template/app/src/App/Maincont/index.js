import React from 'react';
import Wellcont from './Wellcont';
import Thumbcont from './Thumbcont';

const Maincont = ({data}) => (
    <div className="Maincont">
        <Thumbcont items={data} />
        <Wellcont items={data} />
    </div>
);

export default Maincont;
