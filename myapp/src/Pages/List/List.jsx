import React, { useState } from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './Style.js'
import placedetails from '../PlaceDetails/PlaceDetils'
const List = () => {
    const classes=useStyles();

    const [type,settype]=useState('restaurants')
    const [rating,setrating]=useState('')

    const places=[
        {name:'cool places'},
{name:'best beer'},
{name:'best steak'},
{name:'cool places'},
{name:'best beer'},
{name:'best steak'},
{name:'cool places'},
{name:'best beer'},
{name:'best steak'}

];
    return (
        <div className='classes.container'>
            <Typography variant='h4'>
            Restaurent,Hotels&attraction around you
            </Typography>

            <FormControl className={classes.formControl}>
            
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=>settype(e.target.value)}>
            <MenuItem value="restaurants">Restaurent</MenuItem>
            <MenuItem value="hotels">Restaurent</MenuItem>
            <MenuItem value="attractions">Restaurent</MenuItem>
            </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
            
            <InputLabel>Type</InputLabel>
            <Select value={rating} onChange={(e)=>setrating(e.target.value)}>
            <MenuItem value={0}>all</MenuItem>
            <MenuItem value={3}>above 3</MenuItem>
            <MenuItem value={4}>above 4</MenuItem>
            <MenuItem value={5}>above 5</MenuItem>
            </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
            {places?.map((place,i)=>(
<Grid item key={i} xs={12}>
<placedetails place={place}/>
</Grid>

            ))}
            </Grid>

        </div>
    );
};

export default List;