import Container from 'react-bootstrap/Container'


import Stack from 'react-bootstrap/Stack'
import Header from './components/Header'
import Body from './components/Body'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'
import Users from './components/Users'
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <FormPage>
        <Login />
      </FormPage>
    </Container>
  )
}