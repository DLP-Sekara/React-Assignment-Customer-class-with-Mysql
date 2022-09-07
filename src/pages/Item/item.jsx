import React, {Component} from "react";
import {Grid, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from '../../components/common/Button';
import SnackBar from "../../components/common/SnackBar";
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
import ItemService from "../../services/ItemService";
import CustomerService from "../../services/CustomerService";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                code: '',
                name: '',
                price: '',
                qty: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    /*crud*/
    submitItem=async ()=>{
        let formData=this.state.formData;

        if(this.state.btnLabel === "save") {
            console.log("check this :"+formData)
            let res=await ItemService.postItem(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }else{
            let res = await ItemService.putItem(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    }

    deleteItem = async (code) => {
        let params = {
            code: code
        }
        let res = await ItemService.deleteItem(params);

        if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    updateItem = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                code: data.code,
                name: data.name,
                price: data.price,
                qty: data.qty
            }
        });
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        let res = await ItemService.fetchItem();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        /*this.exampleForMap()*/

    };

    clearFields = () => {
        this.setState({
            formData: {
                code: '',
                name: '',
                price: '',
                qty: ''
            }
        });
    };

    render() {
        return (
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
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.code}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.code = e.target.value
                                    this.setState({formData})
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
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name = e.target.value
                                    this.setState({formData})
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
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.price = e.target.value
                                    this.setState({formData})
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
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.qty}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.qty = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        {/*button*/}
                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <Button label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor}
                                    variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>

                {/*table area*/}
                <Grid contaner style={{marginTop: '15px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="item table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Item Code</TableCell>
                                    <TableCell align="left">Item Name</TableCell>
                                    <TableCell align="left">Item Price</TableCell>
                                    <TableCell align="left">Item Qty</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.code}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{row.qty}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateItem(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteItem(row.code)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/*snack bar*/}
                <SnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </>
        )
    }
}

export default Item;