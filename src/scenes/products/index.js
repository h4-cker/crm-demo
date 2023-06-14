import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import {dataProducts, nameProducts, statusProducts} from '../../data/data'
import {randomInt, randomPrice} from '@mui/x-data-grid-generator'
import React, {useState} from 'react'

const createRandomRow = (last) => {
    return {
        id: last + 1, name: nameProducts[randomInt(0, 8)], amount: randomInt(1, 1000),
        price: randomPrice(10.99, 11111.99), status: statusProducts[randomInt(0, 3)]
    }
}

const Products = () => {
    const [products, setProducts] = useState(dataProducts)
    const [selectionModel, setSelectionModel] = useState([])

    const onDeleteRows = () => {
        setProducts((rows) => rows.filter((r) => !selectionModel.includes(r.id)))
    }

    const onAddRow = () => {
        if (products.length > 0) {
            setProducts((prevRows) => [...prevRows, createRandomRow(products[products.length - 1].id)])
        } else {
            setProducts((prevRows) => [...prevRows, createRandomRow(0)])
        }
    }

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field: "name",
            headerName: "Product",
            width: 250

        },
        {
            field: "amount",
            headerName: "Total amount",
            width: 150
        },
        {
            field: "price",
            headerName: "Price for one",
            width: 150
        },
        {
            field: "status",
            headerName: "Status",
            width: 200
        },
    ]
    return (
        <Box m="10px 20px 20px 20px">
            <Header title="PRODUCTS" subtitle="Managing products"/>
            <Box m="5px 0 0 0" display="flex" justifyContent="flex-end">
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onAddRow}
                >
                    <AddOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Add new Product
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
                        Delete Product
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
                    checkboxSelection
                    onSelectionModelChange={setSelectionModel}
                    selectionModel={selectionModel}
                    columns={ columns }
                    rows={ products }
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Products