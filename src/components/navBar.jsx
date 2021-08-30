import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
const navBar = ({totalItems}) => {
    console.log('totalItems',totalItems);
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled className="position-relative">
                    корзина
                   
                        <Badge pill bg="secondary" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </Badge>
                   
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default navBar
