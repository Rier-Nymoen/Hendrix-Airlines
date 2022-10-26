import React, {useContext} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    UserDropdown
} from "./NavbarElements";
import {UserContext} from "../UserContext";

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const { user, setUser } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null)
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Hendrix Airlines
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        {user ? null : (
                            <NavItem>
                                <NavLinks to="/sign-up">Sign Up</NavLinks>
                            </NavItem>
                        )}
                    </NavMenu>
                    {user ? (
                        <NavBtn>
                            <NavBtnLink to="/" onClick={logout}>{user ? user.email : ''}</NavBtnLink>
                        </NavBtn>
                    ) : (
                        <NavBtn>
                            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                        </NavBtn>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;