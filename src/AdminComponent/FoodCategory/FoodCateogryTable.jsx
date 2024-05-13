import { Create, Delete } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import CreateCateogryForm from './CreateCateogryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getResturantCategory } from '../../components/State/Resturant/Action';
import { fetchResturantsOrder } from '../../components/State/Resturant Order/Action';

const categorys=[1,1,1,1]
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
const FoodCateogryTable = () => {
    const {resturant}=useSelector((store)=>store);
    const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("resturant details:",resturant);
  console.log("category for table:",resturant.categories);
  useEffect(()=>{
    dispatch(getResturantCategory({jwt:jwt,resturantId:resturant.usersResturant?.id}))
    // dispatch(getMenuItemByResturantId());
    // dispatch(getResturantsById());
    dispatch(fetchResturantsOrder({resturantId:resturant.usersResturant?.id,jwt:jwt}))
  },[])
    
  return (
    <Box>
        <Card className='mt-5' style={{textAlign:"left"}}>
        <CardHeader
            action={
                <IconButton onClick={handleOpen} aria-label='settings'>
                <Create />
                </IconButton>
            }
            title={"All Cateogry Items"}
            sx={{ pt: 2, alignItems: "center" }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {resturant.categories?.map((row) => (
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
            <CreateCateogryForm/>
        </Box>
        </Modal>
    </Box>
  )
}

export default FoodCateogryTable
