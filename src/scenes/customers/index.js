import {Box, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import {dataCustomers, locationCustomers} from '../../data/data'
import React, {useState} from 'react'
import {randomEmail, randomInt, randomPhoneNumber} from '@mui/x-data-grid-generator'
const { uniqueNamesGenerator, names } = require('unique-names-generator')

const createRandomRow = (last) => {
    return {
        id: last + 1, name: uniqueNamesGenerator({ dictionaries: [names] }) + " " + uniqueNamesGenerator({ dictionaries: [names] }),
        email: randomEmail(), phone: randomPhoneNumber(), location: locationCustomers[randomInt(0, 8)]
    }
}

const Customers = () => {

    const [customers, setCustomers] = useState(dataCustomers)
    const [selectionModel, setSelectionModel] = useState([])

    const onDeleteRows = () => {
        setCustomers((rows) => rows.filter((r) => !selectionModel.includes(r.id)))
    }

    const onAddRow = () => {
        if (customers.length > 0) {
            setCustomers((prevRows) => [...prevRows, createRandomRow(customers[customers.length - 1].id)])
        } else {
            setCustomers((prevRows) => [...prevRows, createRandomRow(0)])
        }
    }

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field: "name",
            headerName: "Name",
            width: 300,
        },
        {
            field: "email",
            headerName: "E-mail",
            width: 400,
        },
        {
            field: "phone",
            headerName: "Phone number",
            width: 150,
        },
        {
            field: "location",
            headerName: "Location",
            width: 200
        },
    ]
    return (
        <Box m="10px 20px 20px 20px">
            <Header title="CUSTOMERS" subtitle="Managing your customers"/>
            <Box m="5px 0 0 0" display="flex" justifyContent="end">
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onAddRow}
                >
                    <AddOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Add new Customer
                    </Typography>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onDeleteRows}
                >
                    <RemoveOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Delete Customers
                    </Typography>
                </IconButton>
            </Box>
            <Box
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        fontFamily: "Ubuntu",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    columns={ columns }
                    rows={ customers }
                    checkboxSelection
                    onSelectionModelChange={setSelectionModel}
                    selectionModel={selectionModel}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Customers