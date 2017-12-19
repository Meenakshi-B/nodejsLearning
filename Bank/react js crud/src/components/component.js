import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import createAction from '../../actions/transactions';
import UserAction from '../../actions/student';
import businessAction from '../../actions/business';
import category from '../../actions/category';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../transaction/css/plugins.min.css';
import '../../transaction/css/style.themed.css';
import '../../transaction/css/preload.css';
import mock from '../../transaction/img/carousal9.jpg';
import '../../transaction/css/style.light-blue-500.min.css';
import '../../transaction/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import AdminMenu from '../adminPage/adminMenu';

import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import { SubHeader } from '../subheader';
import FlatButton from 'material-ui/FlatButton'
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const style = {
    margin: 12,
};



class transactions extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            accoutnumber: '',
            accoutholder: '',
            amount: '',
            transactiondate: ''
        }
        this.changeaccoutnumber = this.changeaccoutnumber.bind(this);
        this.savetransactions = this.savetransactions.bind(this);
        this.changeaccountholder = this.changeaccountholder.bind(this);
        this.changeamount = this.changeamount.bind(this);
        this.changetransactiondate = this.changetransactiondate.bind(this);
        
    }

    componentWillMount() {
        this.props.UserAction.getUser();
        this.props.category.getCategory();
        this.props.businessAction.getBusiness();
    }


    componentWillReceiveProps(nextProps) {
        console.log('transactions nextprops', nextProps)
        // let businessName = localStorage.getItem('Business_name');
        // let transactiondate = localStorage.getItem("BusinessAdmin_ID")
        var userID = localStorage.getItem("user_id");
        var userType = localStorage.getItem("user_type");
        var Bus_ID;

        if (nextProps.getUser !== undefined) {
            var user = nextProps.getUser.result;
            var business = nextProps.getBusiness;
            var businessList = []
            for (var i = 0; i < user.length; i++) {
                for (var j = 0; j < business.length; j++) {
                    if (userType == "BUSINESS_ADMIN") {
                        if (user[i]._id == userID) {
                            if (user[i].business_id === business[j]._id) {
                                businessList.push(business[j])
                                this.setState({ business: businessList })
                                this.setState({ business_name: business[j].name })
                                this.setState({ business_id: business[j]._id })
                                this.setState({ businessAdmin_check: true })
                                this.setState({ admin_check: false })
                                Bus_ID = business[j]._id;
                            }
                        }
                    } else {
                        if (userType == "ADMIN") {
                            this.setState({ business: business })
                            this.setState({ admin_check: true })
                            this.setState({ businessAdmin_check: false })
                        }

                    }
                }
            }
        }

        if (nextProps.getCategory !== undefined) {
            var category = nextProps.getCategory.result;
            var filterByCategory = []
            for (var i = 0; i < category.length; i++) {
                var buisnessID = category[i].business_id.business_status;
                if (userType == "ADMIN") {
                    console.log("category in admin id activated")
                    if (buisnessID === true) {
                        filterByCategory.push(category[i])
                        this.setState({ categoryList: filterByCategory })
                    }
                } else if (userType == "BUSINESS_ADMIN") {
                        var adminId = category[i].business_id._id
                        if (adminId == Bus_ID) {
                            console.log("business  admin id active", Bus_ID)
                            filterByCategory.push(category[i])
                            this.setState({ categoryList: filterByCategory })
                        }
                    }
            }
        }
        if (nextProps.getBusiness != undefined) {
            var business = nextProps.getBusiness
            this.setState({ businessList: business })
        }
        if (nextProps.getUser !== undefined) {
            var user = nextProps.getUser.result;
            for (var i = 0; i < user.length; i++) {
                if (user[i].user_type === "USER") {
                    if (this.state.userList.indexOf(user[i]) === -1) {
                        this.state.userList.push(user[i]);
                    }
                }
            }
        }
        

    };

    accoutnumber(e) {
        this.setState({ transaction_name: e.target.value });
    }

    changeamount(e) {
        this.setState({ transaction_cost: e.target.value });

    }

    changeaccountholder(e) {
        console.log('the value is', e)
        this.setState({ transaction_type: e.name });

    }

    changetransactiondate(e) {
        console.log('the value is', e)
        this.setState({ business_id: e._id, business_name: e.name });

    }
    handleCategorySelect(data) {
        console.log('the target value', data.name);
        this.setState({ category_id: data._id, category_name: data.name })
    }
    changeExpireDate = (event, date) => {
        this.setState({
            expire_date: date,
        });
    };

    changeOriginDate = (event, date) => {
        this.setState({
            origin_date: date,
        });
    };

    changePurchaseCost(e) {
        this.setState({ purchase_cost: e.target.value });

    }
    changeRevenueForBusiness(e) {
        this.setState({ revenue_for_business: e.target.value });

    }
    changeRecurringCost(e) {
        this.setState({ reccuring_cost: e.target.value });

    }

    selectedUser(obj) {
        console.log("obj", obj.firstName)
        this.setState({ user_transaction_id: obj._id, user_transaction_name: obj.firstName });
    }
    handleCallback(data) {
        if (data.data !== undefined) {
            if (data.data.code == '200') {
                toast.success("transactions created Successfully");
                setTimeout(function () { browserHistory.push('/Listtransactions') }.bind(this), 3000);
            }
        } else {
            toast.error("transactions Failed");
            setTimeout(function () { browserHistory.push('/Createtransactions') }.bind(this), 3000);

        }




    }
    savetransactions() {
        var result = {
            "transaction_name": this.state.transaction_name,
            "transaction_type": this.state.transaction_type,
            "business_id": this.state.business_id,
            "category_id": this.state.category_id,
            "transaction_cost": this.state.transaction_cost,
            "user_transaction_id": this.state.user_transaction_id,
            "purchase_cost": this.state.purchase_cost,
            "origin_date": this.state.origin_date,
            "expire_date": this.state.expire_date,
            "revenue_for_business": this.state.revenue_for_business,
            "recurring_cost": this.state.reccuring_cost

        }
        this.props.createAction.createtransactions(result, this.handleCallback);
    }


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <ToastContainer
                    position="top-center"
                    autoClose={800}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <MuiThemeProvider>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={mock} alt="" className="img-responsive wow animated zoomIn animation-delay-8" style={{ height: '670px', width: '100%' }} />
                        </div>
                        <div className="col-md-6">
                            <Card>
                                <center>
                                    <CardTitle title="Create transaction" />
                                    <CardText>
                                        <div className="form-horizontal" >
                                            <fieldset>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter transaction Name"
                                                                    floatingLabelText="transaction Name"
                                                                    onChange={this.accoutnumber}
                                                                    value={this.state.transaction_name}
                                                                />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter transaction Cost"
                                                                    floatingLabelText="transaction Cost"
                                                                    onChange={this.changeamount}
                                                                    value={this.state.transaction_cost}
                                                                /><br />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <SelectField value={this.state.category_name} hintText="Select Category">
                                                                    {this.state.categoryList.map((obj, index) => {
                                                                        return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.handleCategorySelect.bind(this, obj)} />)
                                                                    })
                                                                    }
                                                                </SelectField> <br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <SelectField value={this.state.transaction_type} hintText="Enter Assert">
                                                                    {
                                                                        assertList.map((obj, index) => {
                                                                            return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.changeaccountholder.bind(this, obj)} />)
                                                                        })
                                                                    }
                                                                </SelectField><br />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>

                                                            {this.state.businessAdmin_check === true ?
                                                                <div className='col-md-3'>
                                                                    <SelectField
                                                                        value={this.state.business_name}
                                                                        disabled
                                                                    >
                                                                        <MenuItem value={this.state.business_name} primaryText={this.state.business_name} />
                                                                    </SelectField>

                                                                </div>
                                                                : ''}
                                                            {this.state.admin_check === true ?
                                                                <div className='col-md-3'>
                                                                    <SelectField
                                                                        value={this.state.business_name}
                                                                        hintText="Select Business ID"
                                                                    >
                                                                        {this.state.business.map((obj, i) => {
                                                                            return (<MenuItem value={obj.name} key={i} primaryText={obj.name} onClick={this.changetransactiondate.bind(this, obj)} />)
                                                                        })}
                                                                    </SelectField>
                                                                </div>
                                                                : ""
                                                            }
                                                            {/* <SelectField value={this.state.business_name} hintText="Select Business" disabled>
                                                                    {
                                                                       
                                                                          <MenuItem  value={this.state.business_name} primaryText={this.state.business_name} />
                                                                       
                                                                    }
                                                                </SelectField><br /> */}

                                                            <div className='col-md-3 textboxAlign'>
                                                                <SelectField
                                                                    hintText="Select User"
                                                                    value={this.state.user_transaction_name}
                                                                >
                                                                    {
                                                                        this.state.userList.map((obj, index) => {
                                                                            return (<MenuItem value={obj.firstName} key={index} primaryText={obj.firstName} onClick={this.selectedUser.bind(this, obj)} />
                                                                            )
                                                                        })
                                                                    }
                                                                </SelectField><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter Purchase Cost"
                                                                    multiLine={true}
                                                                    rows={1}
                                                                    rowsMax={4}
                                                                    onChange={this.changePurchaseCost}
                                                                    value={this.state.purchase_cost}
                                                                /><br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Revenue For Business"
                                                                    multiLine={true}
                                                                    rows={1}
                                                                    rowsMax={4}
                                                                    onChange={this.changeRevenueForBusiness}
                                                                    value={this.state.revenue_for_business}
                                                                /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <DatePicker hintText="Origin Date" mode="landscape" onChange={this.changeOriginDate} />

                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <DatePicker hintText="Expire Date" mode="landscape" onChange={this.changeExpireDate} />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <TextField
                                                            hintText="Enter Revenue For Business"
                                                            multiLine={true}
                                                            rows={1}
                                                            rowsMax={4}
                                                            onChange={this.changeRecurringCost}
                                                            value={this.state.reccuring_cost}
                                                        /><br />
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div style={{ marginLeft: "25%" }} className="col-md-6">
                                                        <RaisedButton label="Create" primary={true} onClick={this.savetransactions} />
                                                        <RaisedButton label="Cancel" secondary={true} onClick={browserHistory.goBack} style={{ marginLeft: '10px' }} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </CardText>
                                </center>
                            </Card>
                        </div>
                    </div>
                </MuiThemeProvider>

                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log('this.state', state)
    return {
        createtransactions: state.createtransactions,
        transactionResponse: state.transactions.createSuccess,
        errorResponse: state.transactions.createRejected,
        getUser: state.student.getUserSuccess,
        getCategory: state.category.getSuccess,
        getBusiness: state.business.getSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createAction: bindActionCreators(createAction, dispatch),
        UserAction: bindActionCreators(UserAction, dispatch),
        category: bindActionCreators(category, dispatch),
        businessAction: bindActionCreators(businessAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(transactions);