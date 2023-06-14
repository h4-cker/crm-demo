import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import {dataOrders, statusOrders, nameProducts} from '../../data/data'
import React, {useState} from 'react'
import {randomInt, randomPrice} from '@mui/x-data-grid-generator'
const { uniqueNamesGenerator, names } = require('unique-names-generator')

const createRandomRow = (last) => {
    return {
        id: last + 1, customer: uniqueNamesGenerator({dictionaries: [names]})+ " " + uniqueNamesGenerator({dictionaries: [names]}),
        product: nameProducts[randomInt(0, 8)], amount: randomInt(1, 1000),
        date: randomInt(1, 28) + "/" + randomInt(1, 12) + "/" + randomInt(2020, 2022),
        cost: randomPrice(1.99, 10000.99), status: statusOrders[randomInt(0, 4)]
    }
}

const Orders = () => {

    const [orders, setOrders] = useState(dataOrders)

    const onAddRow = () => {
        if (orders.length > 0) {
            setOrders((prevRows) => [...prevRows, createRandomRow(orders[orders.length - 1].id)])
        } else {
            setOrders((prevRows) => [...prevRows, createRandomRow(0)])
        }
    }

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field: "customer",
            headerName: "Customer",
            width: 300
        },
        {
            field: "product",
            headerName: "Product",
            width: 250
        },
        {
            field: "amount",
            headerName: "Amount",
            width: 150
        },
        {
            field: "date",
            headerName: "Date",
            width: 150
        },
        {
            field: "cost",
            headerName: "Total Cost",
            width: 200
        },
        {
            field: "status",
            headerName: "Status",
            width: 150
        },
    ]

    return (
        <Box m="10px 20px 20px 20px">
            <Header title="ORDERS" subtitle="Managing your orders"/>
            <Box m="5px 0 0 0" display="flex" justifyContent="flex-end">
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onAddRow}
                >
                    <AddOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Add new Order
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
                }}
            >
                <DataGrid
                    columns={ columns }
                    rows={ orders }
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Orders