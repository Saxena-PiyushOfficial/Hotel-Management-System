// Chakra imports
import { Portal, Box, useDisclosure, Text, Button, Link } from '@chakra-ui/react';
import Footer from 'components/footer/FooterAdmin.js';
// Layout components
import Navbar from 'components/navbar/NavbarAdmin.js';
import Sidebar from 'components/sidebar/Sidebar.js';
import { SidebarContext } from 'contexts/SidebarContext';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes.js';

// Custom Chakra theme
export default function Dashboard(props) {
	const { ...rest } = props;
	// states and functions
	const [ fixed ] = useState(false);
	const [ toggleSidebar, setToggleSidebar ] = useState(false);
	// functions for changing the states from components
	const getRoute = () => {
		return window.location.pathname !== '/admin/full-screen-maps';
	};
	
	return (
		<div classname="admin-section">
            <div >

            </div>
        </div>
        );
}