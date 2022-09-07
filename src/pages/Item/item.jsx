import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from '../../components/common/Button';
import CustomerService from "../../services/CustomerService";
import GDSESnackBar from "../../components/common/SnackBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
class Item extends Component{
constructor(props) {
    super(props);
    this.state={
        formData:{
            code:'',
            name:'',
            price:'',
            qty:''
        },
        alert: false,
        message: '',
        severity: '',

        data: [],
        btnLabel: 'save',
        btnColor: 'primary'
    }
}


render(){
    return(
        <>
        <ValidatorForm ref="form" clasName="pt-2" onSubmit={this.submitItem}>
            <Grid container className="pt-2" spacing={3}>

                {/*topic============*/}
                 <Grid item lg={12} xs={12} sm={12} md={12}>
                     <Typography variant="h2">Item Manage</Typography>
                 </Grid>

                {/*txtField one*/}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Item Code</Typography>
                    <TextValidator
                        id="outlinedbasic"
                        placeholder="Item Code"
                        variant ="outlined"
                        size="small"
                        style={{ width: '100%' }}
                        value={this.state.formData.code}
                        onChange={(e) => {
                            let formData = this.state.formData
                            formData.code = e.target.value
                            this.setState({ formData })
                        }}
                        validators={['required']}
                    />
                </Grid>

                {/*txtField two*/}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Item Name</Typography>
                    <TextValidator
                        id="outlinedbasic"
                        placeholder="Item Name"
                        variant ="outlined"
                        size="small"
                        style={{ width: '100%' }}
                        value={this.state.formData.name}
                        onChange={(e) => {
                            let formData = this.state.formData
                            formData.name = e.target.value
                            this.setState({ formData })
                        }}
                        validators={['required']}
                    />
                </Grid>

                {/*txtField three*/}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Item Price</Typography>
                    <TextValidator
                        id="outlinedbasic"
                        placeholder="Item Price"
                        variant ="outlined"
                        size="small"
                        style={{ width: '100%' }}
                        value={this.state.formData.price}
                        onChange={(e) => {
                            let formData = this.state.formData
                            formData.price = e.target.value
                            this.setState({ formData })
                        }}
                        validators={['required']}
                    />
                </Grid>

                {/*txtField four*/}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Item Qty</Typography>
                    <TextValidator
                        id="outlinedbasic"
                        placeholder="Item Qty"
                        variant ="outlined"
                        size="small"
                        style={{ width: '100%' }}
                        value={this.state.formData.qty}
                        onChange={(e) => {
                            let formData = this.state.formData
                            formData.qty = e.target.value
                            this.setState({ formData })
                        }}
                        validators={['required']}
                    />
                </Grid>

                {/*button*/}
                <Grid container style={{ marginTop: '10px' }} direction="row" justifyContent="flex-end" alignItems="center">
                    <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor} variant="contained"/>
                </Grid>
            </Grid>
         </ValidatorForm>
        </>
    )
}
}
export  default Item;