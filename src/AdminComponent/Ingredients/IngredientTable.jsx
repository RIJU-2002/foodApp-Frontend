import { Create, Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIngredientForm from './CreateIngredientForm';

const ingredient=[1,1,1,1]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const IngredientTable = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
        <Card className='mt-5'>
        <CardHeader
            action={
                <IconButton onClick={handleOpen} aria-label='settings'>
                <Create />
                </IconButton>
            }
            title={"All Ingredients"}
            sx={{ pt: 2, alignItems: "center" }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Category</TableCell>
                        <TableCell align="right">Avaibility</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {ingredient.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {1}
                        </TableCell>
                        <TableCell align="left">{"image"}</TableCell>
                        <TableCell align="left">{"customer"}</TableCell>
                        <TableCell align="right">{"price"}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <CreateIngredientForm/>
        </Box>
        </Modal>

    </Box>
  )
}

export default IngredientTable
