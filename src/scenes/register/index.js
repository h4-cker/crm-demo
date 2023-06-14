import React, {useState} from 'react'
import {Grid, Paper, Avatar, TextField, Button, Box, useTheme, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {tokens} from '../../theme'
import {Link} from 'react-router-dom'

const Register = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    const [email, setEmail] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("required")
    const [phone, setPhone] = useState("")
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [phoneError, setPhoneError] = useState("required")
    const [password, setPassword] = useState("")
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("required")

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Wrong e-mail format")
        } else {
            setEmailError("")
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError("Wrong phone format")
        } else {
            setPhoneError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 15) {
            setPasswordError("Password length -> 5-15 symbols")
        } else {
            setPasswordError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "e-mail":
                setEmailDirty(true)
                break
            case "phone number":
                setPhoneDirty(true)
                break
            case "password":
                setPasswordDirty(true)
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
            case "phone number":
                setPhoneDirty(false)
                break
            case "password":
                setPasswordDirty(false)
                break
            default:
                break
        }
    }

    return (
        <form>
            <Grid>
                <Paper elevation="10" style={{padding: 20, height: '70vh', width: 280, margin: "20px auto"}}>
                    <Grid align="center" m="20px">
                        <Avatar style={{backgroundColor: `${colors.greenAccent[500]}`}}><LockOutlinedIcon/></Avatar>
                        <Typography variant="h4">Sign Up</Typography>
                    </Grid>
                    {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                    <TextField style={{margin: "0 10px 10px 0"}} required fullWidth onChange={e => emailHandler(e)}
                               value={email} onBlur={e => blurHandler(e)}
                               onFocus={e => focusHandler(e)}
                               name="e-mail" type="text"
                               placeholder="Enter your e-mail ..."/>
                    {(phoneDirty && phoneError) && <div style={{color: "red"}}>{phoneError}</div>}
                    <TextField style={{margin: "0 10px 10px 0"}} required fullWidth onChange={e => phoneHandler(e)}
                               value={phone} onBlur={e => blurHandler(e)}
                               onFocus={e => focusHandler(e)}
                               name="phone number" type="text"
                               placeholder="Enter your phone number ..."/>
                    {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
                    <TextField style={{margin: "0 10px 10px 0"}} required fullWidth onChange={e => passwordHandler(e)}
                               value={password} onBlur={e => blurHandler(e)}
                               onFocus={e => focusHandler(e)}
                               name="password" type="password"
                               placeholder="Enter your password ..."/>
                    <Button type="submit" color='primary' variant="contained" fullWidth>Sign up</Button>
                    <Box m="10px 0 0 0"></Box>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6" m="0 10px 0 0">Have account?</Typography>
                        <Link style={{color: `${colors.greenAccent[500]}`}} to="/login">Sign in</Link>
                    </Box>
                </Paper>
            </Grid>
        </form>
    )
}

export default Register