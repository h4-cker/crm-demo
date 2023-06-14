import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, Divider, IconButton, Typography, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import { tokens } from '../theme'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import AccImage from '../assets/account.png'

const CustomItem = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}></Link>
        </MenuItem>
    )
}


const Sidebar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("")
    return (
        <Box
            sx={{
                "& .pro-sidebar": {
                    padding: "0 0 10px 0 !important"
                },
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed} paddind="0 0 10px 0">
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]} paddingLeft="20px">
                                    UNTITLED
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="80px"
                                    height="80px"
                                    src={AccImage}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Dmitry Antonov
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    HSE student
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Divider/>
                        <CustomItem
                            title="Tasks"
                            to="/tasks"
                            icon={<FormatListBulletedOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Team"
                            to="/team"
                            icon={<WorkspacesOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Customers"
                            to="/customers"
                            icon={<GroupOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Orders"
                            to="/orders"
                            icon={<Inventory2OutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Products"
                            to="/products"
                            icon={<ShoppingCartOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarMonthOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Divider/>
                        <CustomItem
                            title="User Profile page"
                            to="/profile"
                            icon={<HowToRegOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Register page"
                            to="/register"
                            icon={<VpnKeyOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomItem
                            title="Log-in page"
                            to="/login"
                            icon={<LockOpenOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar