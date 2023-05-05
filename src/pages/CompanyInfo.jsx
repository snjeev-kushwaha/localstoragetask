import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Navbars from '../components/Navbar';

const CompanyInfo = () => {
    const data = [{
        Company: "Geeksynergy Technologies Pvt Ltd",
        Address: "Sanjayanagar, Bengaluru-56",
        Phone: "XXXXXXXXX09",
        Email: "XXXXXX@gmail.com",
    }]

    return (
        <>
            <Navbars />
            <div className='p-5'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3"></div>
                        </div>
                        <div className="col">
                            <div className="p-3 bg-light" style={{ width: '25rem', boxShadow: "10px 10px 5px lightblue" }}>
                                <Card>
                                    {data.map((item, index) => {
                                        return (
                                            <ListGroup variant="flush" key={index}>
                                                <ListGroup.Item>Company: {item.Company}</ListGroup.Item>
                                                <ListGroup.Item>Address: {item.Address}</ListGroup.Item>
                                                <ListGroup.Item>Phone: {item.Phone}</ListGroup.Item>
                                                <ListGroup.Item>Email: {item.Email}</ListGroup.Item>
                                            </ListGroup>
                                        )
                                    })}
                                </Card>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyInfo