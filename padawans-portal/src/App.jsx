import Container from 'react-bootstrap/Container'


import Stack from 'react-bootstrap/Stack'
import Header from './components/Header'
import Body from './components/Body'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        {/* <Posts /> */}
        {/* <Whiteboard /> */}
        <Register />
      </Body>
    </Container>
  )
}