import { Box, IconButton, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext } from '../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const navigate = useNavigate()
    const routeChange = () =>{
        const path = "/profile"
        navigate(path)
    }
    return (
        <Box display="flex" justifyContent="flex-end" p={2}>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon/>
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton onClick={routeChange}>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Navbar