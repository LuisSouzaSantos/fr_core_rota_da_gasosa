import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  './Main.css';
import { BsPlusCircle } from "react-icons/bs";
import tables from '../../utils/tables.json'
import FlagService from "../../services/flag-service";
import FuelService from "../../services/fuel-service";
import AvailableTimeService from "../../services/available-time-service";
import PromotionService from "../../services/promotion-service";
import ServiceService from "../../services/service-service";
import Form from "../../components/form/Form";


class Main extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            flagList: [],
            fuelList: [],
            availableTimeList: [],
            promotionList: [],
            serviceList: [],
            showForm: false,
            nameValue: '',
            visibleValue: false,
            formIndex: 0,
        }

        this.getAllFlags = this.getAllFlags.bind(this);
        this.getAllFuels = this.getAllFuels.bind(this);
        this.getAllAvailableTimes = this.getAllAvailableTimes.bind(this);
        this.getAllPromotion = this.getAllPromotion.bind(this);
        this.getAllServices = this.getAllServices.bind(this);

        this.getAllFlags();
        this.getAllFuels();
        this.getAllAvailableTimes();
        this.getAllPromotion();
        this.getAllServices();
    }

    getAllFlags = () => {
        FlagService.getAll().then((result) => {
            this.setState({flagList: result});
        }, (error) => {
            console.log(error);
        })
    }

    getAllFuels = () => {
        FuelService.getAll().then((result) => {
            this.setState({fuelList: result});
        }, (error) => {
            console.log(error);
        })
    }

    getAllAvailableTimes = () => {
        AvailableTimeService.getAll().then((result) => {
            this.setState({availableTimeList: result});
        }, (error) => {
            console.log(error);
        })
    }

    getAllPromotion = () => {
        PromotionService.getAll().then((result) => {
            this.setState({promotionList: result});
        }, (error) => {
            console.log(error);
        })
    }

    getAllServices = () => {
        ServiceService.getAll().then((result) => {
            this.setState({serviceList: result});
        }, (error) => {
            console.log(error);
        })
    }

    saveFlag = (name: string, visible: boolean) => {
        FlagService.save(name, visible).then((result) => {
            this.setState({flagList: [...this.state.flagList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    saveFuel = (name: string, visible: boolean) => {
        FuelService.save(name, visible).then((result) => {
            this.setState({fuelList: [...this.state.fuelList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    savePromotion = (name: string, visible: boolean) => {
        PromotionService.save(name, visible).then((result) => {
            this.setState({promotionList: [...this.state.promotionList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    saveService = (name: string, visible: boolean) => {
        ServiceService.save(name, visible).then((result) => {
            this.setState({serviceList: [...this.state.serviceList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    saveAvailableTime = (name: string, visible: boolean) => {
        AvailableTimeService.save(name, visible).then((result) => {
            this.setState({availableTimeList: [...this.state.availableTimeList, result]});
        }, (error) => {
            console.log(error);
        })
    }
    
    showForm = (formIndex: number) => {
        this.setState({showForm: true});
        this.setState({formIndex: formIndex});
    }

    hiddenForm = () => {
        this.setState({showForm: false});
    }

    handleFormSave = (event: any, formName: string, formVisible: boolean) => {
        event.preventDefault();

        switch (this.state.formIndex) {
            case 1:
                this.saveFlag(formName, formVisible);
                break;
            case 2:
                this.saveFuel(formName, formVisible);
                break;
            case 3: 
                this.savePromotion(formName, formVisible);
                break;
            case 4:
                this.saveService(formName, formVisible);
                break;
            case 5:
                this.saveAvailableTime(formName, formVisible);
                break;
            default:
                break;;
        }

        this.hiddenForm();
    }

    handleFormEdit = (formName: string, formVisible: boolean) => {
    }

    handleFormClose = (event: any) => {
        event.preventDefault();

        this.hiddenForm();
    }

    returnProperlyList = (key: any, state: any) => {
        switch (key) {
            case 1:
                return state.flagList;
            case 2:
                return state.fuelList;
            case 3: 
                return state.promotionList;
            case 4:
                return state.serviceList;
            case 5:
                return state.availableTimeList;
            default:
                return [];
        }
    }
    
    render() {
        return (
            <div>
                <Form
                    isOpen = {this.state.showForm}
                    name = {this.state.nameValue}
                    visible = {this.state.visibleValue}
                    onSave = {this.handleFormSave}
                    onEdit = {this.handleFormEdit}
                    onClose = {this.handleFormClose}
                />
            <div className='mt-5 row'>
                 {tables.map((table, i) => (
                    <div className='col-xl-6 col-md-6 col-sm-12 mt-3' key={i}>  
                        <div className="card-decker" >
                        <div className="card containerCrud">
                            <div className="card-header d-flex cardHeader">
                                <div>{table.name}</div>     
                                <button className="iconPlus" onClick={() => this.showForm(table.key)}> <BsPlusCircle color="black"/></button>
                            </div>
                            <div className="card-body">
                            <table className="table">
                                    <thead>
                                        <tr>
                                        {table.fields.map((field, i) => (<th scope="col">{field.field}</th>))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.returnProperlyList(table.key, this.state).map((data: any) => {
                                                return (<tr>
                                                            <td>{data['name']}</td>
                                                            <td>{data['visible'].toString()}</td>
                                                        </tr>)
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>              
                    </div>
                ))}
            </div>

            </div>
        )
    }
}

export default Main;