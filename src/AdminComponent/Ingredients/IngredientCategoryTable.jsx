import { Create, Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import CreateCategoryForm from './CreateCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getIngredientsCategory, updateStockOfIngredient } from '../../components/State/Ingredients/Action'

const category=[1,1,1,1]
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
const IngredientCategoryTable = () => {
    const {resturant,ingredients}=useSelector(store=>store);
    const jwt=localStorage.getItem("jwt");
    const dispatch=useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("ingredients:",ingredients);
  useEffect(()=>{
    dispatch(getIngredientsCategory({id:resturant.usersResturant?.id,jwt:jwt}));
  },[])
  return (
      <Box>
        <Card className='mt-5'>
        <CardHeader
            action={
                <IconButton onClick={handleOpen} aria-label='settings'>
                <Create />
                </IconButton>
            }
            title={"All Category table"}
            sx={{ pt: 2, alignItems: "center" }}
            />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {ingredients.category.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
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
            <CreateCategoryForm/>
        </Box>
        </Modal>
    </Box>
  )
}

export default IngredientCategoryTable
