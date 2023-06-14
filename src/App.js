import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Tasks from './scenes/tasks'
import Team from './scenes/team'
import Customers from './scenes/customers'
import Orders from './scenes/orders'
import Products from './scenes/products'
import Calendar from './scenes/calendar'
import Profile from './scenes/profile'
import Login from './scenes/login'
import Register from './scenes/register'


function App() {

    const [theme, setTheme] = useMode();

    return (
        <ColorModeContext.Provider value={setTheme}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar/>
                    <main className="content">
                        <Navbar/>
                        <Routes>
                            <Route path="/tasks" element={<Tasks/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/customers" element={<Customers/>}/>
                            <Route path="/orders" element={<Orders/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
