import {useState, useContext, memo, Fragment} from 'react'

//Router
import {Link, useLocation} from 'react-router-dom'

//React-bootstrap
import {Accordion, useAccordionButton, AccordionContext, Nav, Tooltip, OverlayTrigger} from 'react-bootstrap'


function CustomToggle({children, eventKey, onClick}) {

    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button"
              onClick={(e) => {
                  decoratedOnClick(isCurrentEventKey)
              }}>
            {children}
        </Link>
    );
}

const VerticalNav = memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)

    const [active, setActive] = useState('')

    //location
    let location = useLocation();


    return (
        <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link to="/" className={`${location.pathname === '/' ? 'active' : ''} nav-link `}
                          aria-current="page">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Dashboard</Tooltip>}>
                            <i className="icon">
                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                                          fill="currentColor"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                                          fill="currentColor"></path>
                                </svg>
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Dashboard</span>
                    </Link>
                </li>


                <Accordion.Item as="li" eventKey="Danhmucchung"
                                bsPrefix={`nav-item ${active === 'Danhmucchung' ? 'active' : ''} `}
                                onClick={() => setActive('Danhmucchung')}>
                    <CustomToggle eventKey="Danhmucchung" active={activeMenu === 'Danhmucchung' ? true : false}
                                  onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Danh mục chung</Tooltip>}>
                            <i className="icon">
                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                                          fill="currentColor"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                                          fill="currentColor"></path>
                                </svg>
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Danh mục chung</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="Danhmucchung">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                    <Link to="/company-type"
                                          className={`${location.pathname === '/company-type' ? 'active' : ''} nav-link `}
                                          aria-current="page">
                                        <OverlayTrigger placement="right" overlay={<Tooltip>Loại khách hàng</Tooltip>}>
                                            <i className="icon">
                                                <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10"
                                                     viewBox="0 0 24 24" fill="currentColor">
                                                    <g>
                                                        <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                        </OverlayTrigger>
                                        <span className="item-name">Loại khách hàng</span>
                                    </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                    <Link to="/company-group"
                                          className={`${location.pathname === '/company-group' ? 'active' : ''} nav-link `}
                                          aria-current="page">
                                        <OverlayTrigger placement="right" overlay={<Tooltip>Nhóm khách hàng</Tooltip>}>
                                            <i className="icon">
                                                <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10"
                                                     viewBox="0 0 24 24" fill="currentColor">
                                                    <g>
                                                        <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                        </OverlayTrigger>
                                        <span className="item-name">Nhóm khách hàng</span>
                                    </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>

                </Accordion.Item>

                <Accordion.Item as="li" eventKey="utilities-error"
                                bsPrefix={`nav-item ${active === 'error' ? 'active' : ''} `}
                                onClick={() => setActive('error')}>
                    <CustomToggle eventKey="utilities-error" active={activeMenu === 'utilities-error' ? true : false}
                                  onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Utilities</Tooltip>}>
                            <i className="icon">
                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                                          fill="currentColor"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                                          fill="currentColor"></path>
                                </svg>
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Utilities</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="utilities-error">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link to="/errors/error404"
                                      className={`${location.pathname === '/errors/error404' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Error 404</Tooltip>}>
                                        <i className="sidenav-mini-icon"> E </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Error 404</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/errors/error500"
                                      className={`${location.pathname === '/errors/error500' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Error 500</Tooltip>}>
                                        <i className="sidenav-mini-icon"> E </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Error 500</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/errors/maintenance"
                                      className={`${location.pathname === '/errors/maintenance' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Maintenance</Tooltip>}>
                                        <i className="sidenav-mini-icon"> M </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Maintenance</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
})

VerticalNav.displayName = "VerticalNav"
export default VerticalNav
