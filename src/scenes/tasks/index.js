import {Box, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import {DataGrid} from '@mui/x-data-grid'
import { randomInt } from '@mui/x-data-grid-generator'
import { dataTasks, statusTasks, titleTasks, descriptionTasks } from '../../data/data'
import React, {useState} from 'react'

const createRandomRow = (last) => {
    const day = randomInt(12, 28)
    const month = randomInt(4, 7)
    const year = randomInt(2023, 2024)
    const day1 = day + randomInt(1, 4)
    const month1 = month + randomInt(0, 5)
    return {
        id: last + 1,
        title: titleTasks[randomInt(0, 6)],
        description: descriptionTasks[randomInt(0, 10)],
        start: day + "/" + month + "/" + year,
        end: day1 + "/" + month1 + "/" + year,
        status: statusTasks[randomInt(0, 4)]
    }
}

const Tasks = () => {
    const [tasks, setTasks] = useState(dataTasks)
    const [selectionModel, setSelectionModel] = useState([])

    const onDeleteRows = () => {
        setTasks((rows) => rows.filter((r) => !selectionModel.includes(r.id)))
    }

    const onAddRow = () => {
        if (tasks.length > 0) {
            setTasks((prevRows) => [...prevRows, createRandomRow(tasks[tasks.length - 1].id)])
        } else {
            setTasks((prevRows) => [...prevRows, createRandomRow(0)])
        }
    }

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field: "title",
            headerName: "Title",
            width: 150,
        },
        {
            field: "description",
            headerName: "Description",
            width: 650,
        },
        {
            field: "start",
            headerName: "Start Date",
            width: 100,
        },
        {
            field: "end",
            headerName: "End Date",
            width: 100,
        },
        {
            field: "status",
            headerName: "Status",
            width: 100,
        },
    ]
    return (
        <Box m="10px 20px 20px 20px">
            <Header title="TASKS" subtitle="Managing your tasks"/>
            <Box m="5px 0 0 0" display="flex" justifyContent="flex-end">
                <IconButton
                    sx={{
                        borderRadius: 10,
                    }}
                    onClick={onAddRow}
                >
                    <AddOutlinedIcon/>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        Add new Task
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
                        Delete Task
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
                    rows={ tasks }
                />
            </Box>
        </Box>
    )
}

export default Tasks