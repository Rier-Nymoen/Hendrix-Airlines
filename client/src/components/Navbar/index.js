import React, {useContext, useState} from 'react';
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
import {Avatar, Menu, MenuItem, IconButton, Tooltip} from '@mui/material';

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const { user, setUser } = useContext(UserContext);

    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.replace('/');
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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
                        <div>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={(event) => setAnchorEl(event.currentTarget)}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}>
                                        <Avatar sx={{ width: 45, height: 45 }}>
                                            {user.email[0].toUpperCase()}
                                        </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={()=> setAnchorEl(null)}
                                onClick={()=> setAnchorEl(null)}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                            </Menu>
                        </div>
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