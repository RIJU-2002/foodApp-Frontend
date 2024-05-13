import { Create, Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const menu=[1,1,1,1]
const MenuTable = () => {
    const navigate=useNavigate();
  return (
    <Box>
        <Card className='mt-5'>
        <CardHeader
            action={
                <IconButton onClick={()=>navigate("/admin/resturants/add-menu")} aria-label='settings'>
                <Create />
                </IconButton>
            }
            title={"All Menu Items"}
            sx={{ pt: 2, alignItems: "center" }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Avaibility</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {1}
                        </TableCell>
                        <TableCell align="right">{"image"}</TableCell>
                        <TableCell align="right">{"customer"}</TableCell>
                        <TableCell align="right">{"price"}</TableCell>
                        <TableCell align="right">{"name"}</TableCell>
                        <TableCell align="right"><IconButton><Delete/></IconButton></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
    </Box>
  )
}

export default MenuTable
