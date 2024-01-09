import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';
import AtomIcon from '@mui/icons-material/AutofpsSelect';
import ProfileIcon from '@mui/icons-material/Person';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';

import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

// import visitors from '../visitors';
// import orders from '../orders';
// import invoices from '../invoices';
// import products from '../products';
// import categories from '../categories';
import reviews from '../sles';
import SubMenu from './SubMenu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<AtomIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to="/profiles"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.profiles.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<ProfileIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/feeds"
                    state={{ _scrollToTop: true }}
                    primaryText="Feeds"
                    leftIcon={<DynamicFeedOutlinedIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/menus"
                    state={{ _scrollToTop: true }}
                    primaryText="Menus"
                    leftIcon={<MenuBookOutlinedIcon/>}
                    dense={dense}
                />
                 <MenuItemLink
                    to="/campaign"
                    state={{ _scrollToTop: true }}
                    primaryText="Campaign"
                    leftIcon={<LoyaltyOutlinedIcon/>}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<AtomIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to="/products"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<AtomIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<AtomIcon/>}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="pos.menu.customers"
                icon={<AtomIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to="/customers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<AtomIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/segments"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to="/linearChannels"
                state={{ _scrollToTop: true }}
                primaryText="Linear Channels"
                leftIcon={<DvrOutlinedIcon/>}
                dense={dense}
            />
             <MenuItemLink
                to="/sles"
                state={{ _scrollToTop: true }}
                primaryText="SLEM"
                leftIcon={<ScoreboardOutlinedIcon/>}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;
