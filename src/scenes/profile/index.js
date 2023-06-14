import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import BackImage from '../../assets/background.jpg'
import AccImage from '../../assets/account.png'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'

const Profile = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${BackImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "250px"
                }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box textAlign="center" m="10px" width="250px">
                    <Typography variant="h2">
                        BEST EMPLOYEE OF THE MONTH
                    </Typography>
                    <Box m="10px 0 0 0"></Box>
                    <Typography variant="h5">
                        3 times in a row
                    </Typography>
                </Box>
                <Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                            alt="profile-user"
                            width="150px"
                            height="150px"
                            src={AccImage}
                            style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                        >
                            Dmitry Antonov
                        </Typography>
                        <Typography variant="h4" color={colors.greenAccent[500]}>
                            HSE student
                        </Typography>
                    </Box>
                </Box>
                <Box textAlign="center" m="10px" width="250px">
                    <Typography variant="h2">
                        Work experience in the company for 20 years
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" m="30px">

                <Box width="350px">
                    <Typography variant="h3" m="0 0 20px 0" color={colors.blueAccent[500]}>
                        About Me
                    </Typography>
                    <Typography variant="h5" m="0 0 20px 0" color={colors.grey[300]}>
                        Aliquam nunc diam, mollis vel suscipit convallis, sodales non eros.
                        Nunc euismod ultricies pellentesque. Phasellus leo nunc, luctus sed tristique eu, malesuada eget ipsum.
                    </Typography>
                    <Typography variant="h3" m="0 0 20px 0" color={colors.blueAccent[500]}>
                        Personal skills
                    </Typography>
                    <Typography variant="h5" m="0 0 20px 0" color={colors.grey[300]}>
                        1. Vivamus commodo augue a efficitur tincidunt. Etiam sit amet urna neque.
                    </Typography>
                    <Typography variant="h5" m="0 0 20px 0" color={colors.grey[300]}>
                        2. In sit amet diam dapibus, tempor nunc vel, elementum mauris.
                    </Typography>
                    <Typography variant="h5" m="0 0 20px 0" color={colors.grey[300]}>
                        3. In sit amet diam dapibus, tempor nunc vel, elementum mauris.
                    </Typography>
                </Box>
                <Box width="400px">
                    <Typography variant="h3" m="0 0 20px 0" color={colors.blueAccent[500]}>
                        Education
                    </Typography>
                    <Box display="flex" alignItems="center" flexWrap="wrap" m="0 0 30px 0" textAlign="center">
                        <SchoolOutlinedIcon style={{color: colors.greenAccent[500]}} />
                        <Typography variant="h3" color={colors.grey[300]} m="0 10px">
                            Higher School of Economics
                            <Typography variant="h5" color={colors.greenAccent[200]}>
                                - Software Engineering | 2100 -
                            </Typography>
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" flexWrap="wrap" m="0 0 30px 0" textAlign="center">
                        <AccountBalanceOutlinedIcon style={{color: colors.greenAccent[500]}} />
                        <Typography variant="h3" color={colors.grey[300]} m="0 10px">
                            Higher School of Economics
                            <Typography variant="h5" color={colors.greenAccent[200]}>
                                - Software Engineering | 2100 -
                            </Typography>
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" flexWrap="wrap" m="0 0 30px 0" textAlign="center">
                        <WorkspacePremiumOutlinedIcon style={{color: colors.greenAccent[500]}} />
                        <Typography variant="h3" color={colors.grey[300]} m="0 10px">
                            Higher School of Economics
                            <Typography variant="h5" color={colors.greenAccent[200]}>
                                - Software Engineering | 2100 -
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
                <Box width="300px">
                    <Typography variant="h3" m="0 0 20px 0" color={colors.blueAccent[500]}>
                        Ways to find Me
                    </Typography>
                    <Typography variant="h4" m="0 0 30px 0" color={colors.grey[300]}>
                        Phone number: +72357290573
                    </Typography>
                    <Typography variant="h4" m="0 0 30px 0" color={colors.grey[300]}>
                        E-mail: randomemail@mail.com
                    </Typography>
                    <Typography variant="h4" m="0 0 30px 0" color={colors.grey[300]}>
                        Telegram: @random_random
                        <Typography variant="h5" textAlign="center" m="30px 10px 0 0">
                            You can call me
                        </Typography>
                        <Typography variant="h5" textAlign="center" m="5px 10px 0 0">
                            from 9:00 to 21:00
                        </Typography>
                    </Typography>
                    <Typography variant="h4" m="0 0 30px 0" color={colors.grey[300]}>
                        Location: Nizhniy Novgorod, Lvovskaya street, 1
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile