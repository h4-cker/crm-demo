import { Box, Typography, IconButton, useTheme } from '@mui/material'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {dataTeam, postTeam} from '../../data/data'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import Header from '../../components/Header'
import React, {useState} from 'react'
import {randomEmail, randomInt, randomPhoneNumber} from '@mui/x-data-grid-generator'
import {names, uniqueNamesGenerator} from 'unique-names-generator'

const createRandomRow = (last) => {
    return {
        id: last + 1, name: uniqueNamesGenerator({ dictionaries: [names] }) + " " + uniqueNamesGenerator({ dictionaries: [names] }),
        email: randomEmail(), phone: randomPhoneNumber(), post: postTeam[randomInt(0, 5)]
    }
}

const Team = () => {

    const [teammate, setTeammate] = useState(dataTeam)
    const [selectionModel, setSelectionModel] = useState([])

    const onDeleteRows = () => {
        setTeammate((rows) => rows.filter((r) => !selectionModel.includes(r.id)))
    }

    const onAddRow = () => {
        if (teammate.length > 0) {
            setTeammate((prevRows) => [...prevRows, createRandomRow(teammate[teammate.length - 1].id)])
        } else {
            setTeammate((prevRows) => [...prevRows, createRandomRow(0)])
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
            field: "post",
            headerName: "Post",
            width: 100
        },
    ]

    return (
        <Box m="10px 20px 20px 20px">
            <Header title="TEAM" subtitle="Managing your team members"/>
            <Box
                m="5px 0 0 0"
                display="flex"
                justifyContent="flex-end"
            >
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onAddRow}
                >
                    <AddOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Add new Teammate
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
                        Delete Teammate
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
                    rows={ teammate }
                    checkboxSelection
                    onSelectionModelChange={setSelectionModel}
                    selectionModel={selectionModel}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Team