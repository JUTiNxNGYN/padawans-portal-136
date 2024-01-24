import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Sidebar() {
    return (
        <Navbar>
            <Nav.Item>
                <Nav.link href='/'></Nav.link>
            </Nav.Item>
        </Navbar>
    )
}

