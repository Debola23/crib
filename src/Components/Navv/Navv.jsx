import Styles from './Navv.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';;
import StaggeredDropDown1 from './Dropdown/StaggeredDropDown1';
import StaggeredDropDown2 from './Dropdown/StaggeredDropDown2';



export const Navv = () => {


  return (
    
      <>
    <div className={Styles.navv}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className='flex text-center align-center gap-[10px]'>
            <img src="/Images/logo.png" alt="img" className='h-[48px] w-[44px]' />
            <span className='text-[24px] font-semibold text-[#121318] text-center mt-[6px]'>Crib</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center gap-4 ">
              <StaggeredDropDown1/>
              <Nav.Link href="/properties" id={Styles.link}>Properties</Nav.Link>
              <StaggeredDropDown2/>
              <Nav.Link href="#news" id={Styles.link}>News</Nav.Link>
              <Nav.Link href="#" id={Styles.link}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      </>
      

      
  )
}
