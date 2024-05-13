import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const orders=[1,1,1,1,]
const OrderTable = () => {
  return (
    <Box>
        <Card className='mt-5'>
            <CardHeader 
            title={"All Orders"}
            sx={{pt:2,alignItems:"center"}}/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Customer</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
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
                        <TableCell align="right">{"imgredients"}</TableCell>
                        <TableCell align="right">{"status"}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
    </Box>
  )
}

export default OrderTable

// const OrderTable = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default OrderTable
