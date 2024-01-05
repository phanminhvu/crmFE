import {useState,useEffect,memo} from 'react'

import { Navbar,Container, Nav, Dropdown,  } from 'react-bootstrap'

import CustomToggle from "../../../dropdowns"

import { useSelector } from 'react-redux';

import * as SettingSelector from '../../../../store/setting/selectors'


const Headerpro = memo((props) => {
    const navbarHide = useSelector(SettingSelector.navbar_show); // array
    const themeFontSize = useSelector(SettingSelector.theme_font_size)
    const headerNavbar = useSelector(SettingSelector.header_navbar)
    useEffect(() =>{
        
         if(headerNavbar === 'navs-sticky' || headerNavbar === 'nav-glass')
         {
             window.onscroll=() =>{
                if (document.documentElement.scrollTop > 50) {
                    document.getElementsByTagName('nav')[0].classList.add( 'menu-sticky')
                  } else {
                    document.getElementsByTagName('nav')[0].classList.remove('menu-sticky')
                  }
             }
          }
          
          document.getElementsByTagName('html')[0].classList.add(themeFontSize) 

         
          //offcanvase code
          const result = window.matchMedia("(max-width: 1200px)");
          window.addEventListener('resize', 
                                        () =>{ 
                                            if(result.matches === true){
                                                if(show1 === true){
                                                    document.documentElement.style.setProperty('overflow' ,'hidden');
                                                }
                                                else{
                                                    document.documentElement.style.removeProperty('overflow')
                                                }
                                            
                                            }
                                            else{
                                            document.documentElement.style.removeProperty('overflow')
                                            }
                                    
                                        }
                         )
            if(window.innerWidth <= '1200'){
                    if(show1 === true){
                        document.documentElement.style.setProperty('overflow' ,'hidden');
                    }
                    else{
                        document.documentElement.style.removeProperty('overflow')
                    }

                }
                else{
                    document.documentElement.style.removeProperty('overflow')
                }
       
    })

    const[show, setShow] = useState(true)
      
    const [show1, setShow1] = useState(false);
    
    //collapse


    //fullscreen
    const fullscreen= () => {
        if (!document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
    }




       
    const minisidebar =() =>{
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }
    

    return (
        <Navbar expand="xl" className={`nav iq-navbar ${headerNavbar} ${navbarHide.join( " " )}`}>
            <Container fluid className="navbar-inner">

                <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                    <i className="icon d-flex">
                        <svg width="20px" viewBox="0 0 24 24" className="icon-20" >
                        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                        </svg>
                    </i>
                </div>
                <div className="d-flex align-items-center justify-content-between product-offcanvas">
                    <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block">
                        <small className="mb-0 text-capitalize">Home</small>
                    </div>
                    <div className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${show1 === true ? 'show' : '' } `} tabIndex="-1" id="offcanvasBottom" style={{visibility: `${show1 === true ? 'visible' : 'hidden'}`}}>

                    </div>
                    <div className={`offcanvas-backdrop fade  ${show1 === true ? 'show d-block':'d-none' }`} onClick={() =>setShow1(false)}></div>
                </div>

                <div className={` navbar-collapse ${show1 === true ? 'collapse show' : 'collapse'}`}   id="navbarSupportedContent">
                    <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                        {/*<li className="nav-item dropdown me-0 me-xl-3">*/}
                        {/*    <div className="d-flex align-items-center mr-2 iq-font-style" role="group" aria-label="First group">*/}
                        {/*        <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon btn-sm" id="font-size-sm" defaultChecked={themeFontSize} value="theme-fs-sm" >*/}
                        {/*            <span className="mb-0 h6" style={{color: "inherit"}} >A</span>*/}
                        {/*        </RadioBtn>*/}
                        {/*        <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon" id="theme-fs-md" defaultChecked={themeFontSize} value="theme-fs-md" >*/}
                        {/*            <span className="mb-0 h4" style={{color :'inherit'}}  >A</span>*/}
                        {/*        </RadioBtn>*/}
                        {/*        <RadioBtn btnName="theme_font_size" labelclassName="  border-0 btn-icon" id="theme-fs-lg" defaultChecked={themeFontSize} value="theme-fs-lg" >*/}
                        {/*            <span className="mb-0 h2" style={{color :'inherit'}}  >A</span>*/}
                        {/*        </RadioBtn>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<Dropdown as="li" className="nav-item border-end pe-3 d-none d-xl-block">*/}
                        {/*    <div className="form-group input-group mb-0 search-input">*/}
                        {/*        <Form.Control type="text"  placeholder="Search..." />*/}
                        {/*        <span className="input-group-text">*/}
                        {/*            <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></circle>*/}
                        {/*                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </div>*/}
                        {/*</Dropdown>*/}

                        <Nav.Item className=" iq-full-screen d-none d-xl-block"  onClick={() => setShow(!show)}>
                            <Nav.Link  id="btnFullscreen"   onClick={fullscreen}>
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill" >
                                    <span className="btn-inner"  >
                                        <svg className={`normal-screen ${ show === true ? '' : 'd-none'} icon-24`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5528 5.99656L13.8595 10.8961" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        <path d="M5.8574 18.896L10.5507 13.9964" stroke="white" strokeWidth="1.5" strokeLinejoin="round" ></path>
                                        <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="white" strokeWidth="1.5"strokeLinejoin="round"></path>
                                        </svg>
                                        <svg className={`full-normal-screen ${ show === false ? '' : 'd-none'} icon-24`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Dropdown as="li" className="nav-item iq-tour ps-3 ps-lg-0">
                            <Dropdown.Toggle  as={CustomToggle}  variant="py-0  d-flex align-items-center nav-link"  >
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                                    <span className="btn-inner">
                                        <svg width="32" className="icon-32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="end">
                                <Dropdown.Item href="/dashboard/app/user-profile">Profile</Dropdown.Item>
                                <hr className="dropdown-divider" />
                                <Dropdown.Item href="/auth/sign-in">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </div>
            </Container>
        </Navbar>
    )
})

Headerpro.displayName="Headerpro"
export default Headerpro
