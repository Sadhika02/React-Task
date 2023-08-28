import logo from './assets/img/logo2.png';
import support from './assets/img/support.svg';
import notifications from './assets/img/notifications.svg';
import dashboard from './assets/img/dashboard.svg';
import paycycleprocess from './assets/img/pay-cycle-process.svg';
import masterconfiguration from './assets/img/master-configuration.svg';
import smartreports from './assets/img/smart-reports.svg';
import more from './assets/img/more.svg';
// import './App.css';
import './index.scss';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-and-info">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='dropdown-container'>
          <p className='pay-cycle'>Pay Cycle: 31-May-2021 to 31-June-2021</p>
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              color="white"
            >
              <b>Accenture India Pvt Ltd</b>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                Infosys
              </DropdownItem>
              <DropdownItem>
                Tata Consultancy
              </DropdownItem>
              <DropdownItem>
                Wipro
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <nav>
          <ul>
            <li><a href=''>
              <img src={support}></img>
              SUPPORT</a></li>
            <li><a href=''>
              <img src={notifications}></img>
              NOTIFICATIONS</a></li>
            <li><a href='' className='user-login'>
              R</a></li>
          </ul>
        </nav>


      </header>

      <Container fluid>
        <Row xs="10">
          <Col xs='auto' className='side-navs text-center'>
            <Nav
              vertical
            >
              <NavItem>
                <NavLink className='nav-link'
                  href="#"
                >
                  <img src={dashboard}></img>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={paycycleprocess}></img>
                  Paycycle<br></br>Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active>
                  <img src={masterconfiguration}></img>
                  Master<br></br>Configura..
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={smartreports}></img>
                  Smart<br></br>Reports
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={more}></img>
                  More
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col
            className=""
            xs="12" sm="10"
          >

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
