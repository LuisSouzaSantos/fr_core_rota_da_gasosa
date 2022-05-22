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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '../../components/menu'


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
            idValue: 0,
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

    deleteFlag = (id: number) => {
        FlagService.delete(id).then((result) => {
            this.setState({flagList: this.removeItemFromArray(this.state.flagList, id)});
        }, (error) => {
            console.log(error);
        })
    }

    deleteFuel = (id: number) => {
        FuelService.delete(id).then((result) => {
            this.setState({fuelList: this.removeItemFromArray(this.state.fuelList, id)});
        }, (error) => {
            console.log(error);
        })
    }

    deletePromotion = (id: number) => {
        PromotionService.delete(id).then((result) => {
            this.setState({promotionList: this.removeItemFromArray(this.state.promotionList, id)});
        }, (error) => {
            console.log(error);
        })
    }

    deleteService = (id: number) => {
        ServiceService.delete(id).then((result) => {
            this.setState({serviceList: this.removeItemFromArray(this.state.serviceList, id)});
        }, (error) => {
            console.log(error);
        })
    }

    deleteAvailableTime = (id: number) => {
        AvailableTimeService.delete(id).then((result) => {
            this.setState({availableTimeList: this.removeItemFromArray(this.state.availableTimeList, id)});
        }, (error) => {
            console.log(error);
        })
    }

    editFlag = (id: number, name: string, visible: boolean) => {
        FlagService.edit(id, name, visible).then((result) => {
            this.setState({flagList: this.removeItemFromArray(this.state.flagList, id)});
            this.setState({flagList: [...this.state.flagList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    editFuel = (id: number, name: string, visible: boolean) => {
        FuelService.edit(id, name, visible).then((result) => {
            this.setState({fuelList: this.removeItemFromArray(this.state.fuelList, id)});
            this.setState({fuelList: [...this.state.fuelList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    editPromotion = (id: number,name: string, visible: boolean) => {
        PromotionService.edit(id, name, visible).then((result) => {
            this.setState({promotionList: this.removeItemFromArray(this.state.promotionList, id)});
            this.setState({promotionList: [...this.state.promotionList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    editService = (id: number, name: string, visible: boolean) => {
        ServiceService.edit(id, name, visible).then((result) => {
            this.setState({serviceList: this.removeItemFromArray(this.state.serviceList, id)});
            this.setState({serviceList: [...this.state.serviceList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    editAvailableTime = (id: number, name: string, visible: boolean) => {
        AvailableTimeService.edit(id, name, visible).then((result) => {
            this.setState({availableTimeList: this.removeItemFromArray(this.state.availableTimeList, id)});
            this.setState({availableTimeList: [...this.state.availableTimeList, result]});
        }, (error) => {
            console.log(error);
        })
    }

    removeItemFromArray = (array: any, id: number) => {
        return array.filter((element: { id: number; }) => element.id !== id);
    }
    
    showForm = () => {
        this.setState({showForm: true});
    }

    showFormInSaveMode = (formIndex: number) => {
        this.showForm();
        this.setState({formIndex: formIndex});
    }

    showFormInEditMode = (formIndex: number, idValue: number, nameValue: string, visibleValue: boolean) => {
        this.setState({idValue: idValue});
        this.setState({nameValue: nameValue});
        this.setState({visibleValue: visibleValue});

        this.setState({formIndex: formIndex});
        this.showForm();
    }

    hiddenForm = () => {
        this.setState({showForm: false});
        this.setState({idValue: 0});
        this.setState({nameValue: ''});
        this.setState({visibleValue: false});
        this.setState({formIndex: 0});
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

    handleDeleteItem = (formIndex: number, id: number) => {
        switch (formIndex) {
            case 1:
                this.deleteFlag(id);
                break;
            case 2:
                this.deleteFuel(id);
                break;
            case 3: 
                this.deletePromotion(id);
                break;
            case 4:
                this.deleteService(id);
                break;
            case 5:
                this.deleteAvailableTime(id);
                break;
            default:
                break;;
        }

        this.hiddenForm();
    }

    handleFormEdit = (event: any, id: number, formName: string, formVisible: boolean) => {
        event.preventDefault();

        switch (this.state.formIndex) {
            case 1:
                this.editFlag(id, formName, formVisible);
                break;
            case 2:
                this.editFuel(id, formName, formVisible);
                break;
            case 3: 
                this.editPromotion(id, formName, formVisible);
                break;
            case 4:
                this.editService(id, formName, formVisible);
                break;
            case 5:
                this.editAvailableTime(id, formName, formVisible);
                break;
            default:
                break;;
        }

        this.hiddenForm();
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
            <><Menu></Menu>
            <div>
                {this.state.showForm && <Form
                    isOpen={this.state.showForm}
                    id={this.state.idValue}
                    name={this.state.nameValue}
                    visible={this.state.visibleValue}
                    onSave={this.handleFormSave}
                    onEdit={this.handleFormEdit}
                    onClose={this.handleFormClose} />}
                <div className='mt-5 row'>
                    {tables.map((table, i) => (
                        <div className='col-xl-6 col-md-6 col-sm-12 mt-5 gridCruds' key={i}>
                            <div className="card-decker">
                                <div className="card containerCrud">
                                    <div className="card-header d-flex cardHeader">
                                        <div>{table.name}</div>
                                        <button title="buttonPlus" className="iconPlus" onClick={() => this.showFormInSaveMode(table.key)}> <BsPlusCircle color="black" /></button>
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    {table.fields.map((field, i) => (<th scope="col">{field.field}</th>))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.returnProperlyList(table.key, this.state).map((data: any) => {
                                                    return (<tr>
                                                        <td>{data['name']}</td>
                                                        <td>{data['visible'].toString()}</td>
                                                        <td>
                                                            <EditIcon color="secondary" onClick={() => this.showFormInEditMode(table.key, data['id'], data['name'], data['visible'])} />
                                                            <DeleteIcon sx={{ color: "red" }} onClick={() => this.handleDeleteItem(table.key, data['id'])} />
                                                        </td>
                                                    </tr>);
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div></>
        )
    }
}

export default Main;