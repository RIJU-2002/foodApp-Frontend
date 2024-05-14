import { Create, Delete } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardActions, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFoodAction, getMenuItemByResturantId, updateMenuItemsAvailability } from '../../components/State/Menu/Action'
const menus=[1,1,1,1]
const MenuTable = () => {
    const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {resturant,ingredients,menu}=useSelector(store=>store);
    const navigate=useNavigate();
    console.log("menu for table:",menu)
    useEffect(()=>{
        dispatch(getMenuItemByResturantId({resturantId:resturant.usersResturant?.id,jwt:jwt,vegetarian:false,nonveg:false,seasonal:false,foodCategory:""}));
    },[])
    const handleUpdateAvailable=(id)=>{
        dispatch(updateMenuItemsAvailability({foodId:id,jwt:jwt}));
      }
      const deleteMenu=(id)=>{
        dispatch(deleteFoodAction({foodId:id,jwt:jwt}))
      }
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
                        <TableCell align="left">Image</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Avaibility</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.menuItems?.map((item) => (
                        <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right"><Avatar src={item.images}></Avatar></TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="right">{item.ingredients.map((ingredient)=><Chip label={ingredient.name}/>)}</TableCell>
                        <TableCell align="right">{item.ingredients.map((ingredient)=><Chip label={ingredient.category.name}/>)}</TableCell>
                        <TableCell align="right">Rs.{item.price}</TableCell>
                        <TableCell align="right"><Button onClick={()=>handleUpdateAvailable(item.id)}>
                                {item.available?"Yes":"No"}
                                </Button> </TableCell>
                        <TableCell align="right"><IconButton color='primary' onClick={()=>deleteMenu(item.id)}>
                            <Delete/>
                            </IconButton>
                            </TableCell>
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
