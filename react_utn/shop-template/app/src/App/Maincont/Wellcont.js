import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Maincont.css';

const Wellcont = ({ items }) => (
    <div className="well">
        <div className="text-right">
            <a className="btn btn-success">Leave a Review</a>
        </div>

        <hr />

        <Row>
            <Col xs={12} md={12}>
                {items.map((item, i) => <span key={i} name={item.star} className="glyphicon glyphicon-star"></span>)}
                <span className="glyphicon glyphicon-star-empty"></span>
                Anonymous
                <span className="pull-right">10 days ago</span>
                <p>This product was great in terms of quality. I would definitely buy another!</p>
            </Col>
        </Row>

        <hr />

        <Row>
            <Col xs={12} md={12}>
                {items.map((item, i) => <span key={i} name={item.star} className="glyphicon glyphicon-star"></span>)}
                <span className="glyphicon glyphicon-star-empty"></span>
                Anonymous
                <span className="pull-right">12 days ago</span>
                <p>I've alredy ordered another one!</p>
            </Col>
        </Row>

        <hr />

        <Row>
            <Col xs={12} md={12}>
                {items.map((item, i) => <span key={i} name={item.star} className="glyphicon glyphicon-star"></span>)}
                <span className="glyphicon glyphicon-star-empty"></span>
                Anonymous
                <span className="pull-right">15 days ago</span>
                <p>I've seen some better than this, but not at this price. I definitely recommend this item.</p>
            </Col>
        </Row>
    </div>
);

export default Wellcont;