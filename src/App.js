import { Container, Row, Col } from 'react-bootstrap';
import UserListContainer from './app/components/UserListContainer';
import AddUser from './app/components/AddUser'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Container fluid="md">
      <Row>
        <Col><h4>Dashboard</h4>
        <Route exact path="/" component={UserListContainer} />
        <Route path="/add" component={AddUser} />
        
        </Col>
      </Row>
    </Container>
    </Router>
  );
}

export default App;
