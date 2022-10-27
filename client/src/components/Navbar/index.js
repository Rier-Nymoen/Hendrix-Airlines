import React, {useContext, useState} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";
import {UserContext} from "../UserContext";
import {Avatar, Menu, MenuItem, IconButton, Tooltip} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const { user, setUser } = useContext(UserContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Hendrix Airlines
                    </NavLogo>
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
                        <>
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
                                    <MenuItem divider={true} disabled={true}>{user.email}</MenuItem>
                                    <MenuItem divider={true} onClick={() => navigate('/my-account')}>My Account</MenuItem>
                                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                            </Menu>
                        </>
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