import React, {useState} from 'react'
import {Grid, Paper, Avatar, TextField, Button, Box, useTheme, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {tokens} from '../../theme'
import {Link} from 'react-router-dom'

const Login = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [email, setEmail] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("required")
    const [password, setPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Wrong e-mail format")
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "e-mail":
                setEmailDirty(true)
                break
            default:
                break
        }
    }

    const focusHandler = (e) => {
        switch (e.target.name) {
            case "e-mail":
                setEmailDirty(false)
                break
            default:
                break
        }
    }

    return (
        <form>
            <Grid>
                <Paper elevation="10" style={{padding: 20, height: "70vh", width: 280, margin: "20px auto"}}>
                    <Grid align='center' m="20px">
                        <Avatar style={{backgroundColor: `${colors.greenAccent[500]}`}}><LockOutlinedIcon/></Avatar>
                        <Typography variant="h4">Sign In</Typography>
                    </Grid>
                    {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                    <TextField style={{margin: "0 10px 10px 0"}} required fullWidth onChange={e => emailHandler(e)}
                               value={email} onBlur={e => blurHandler(e)}
                               onFocus={e => focusHandler(e)}
                               name="e-mail" type="text"
                               placeholder="Enter your e-mail ..."/>
                    <TextField style={{margin: "0 10px 10px 0"}} required fullWidth onChange={e => passwordHandler(e)}
                               value={password} onBlur={e => blurHandler(e)}
                               onFocus={e => focusHandler(e)}
                               name="password" type="password"
                               placeholder="Enter your password ..."/>
                    <Button m="10px 0 0 0" type="submit" color='primary' variant="contained" fullWidth>Sign in</Button>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6" m="0 10px 0 0">Don't have account?</Typography>
                        <Link style={{color: `${colors.greenAccent[500]}`}} to="/register">Sign up</Link>
                    </Box>
                </Paper>
            </Grid>
        </form>
    )
}

export default Login