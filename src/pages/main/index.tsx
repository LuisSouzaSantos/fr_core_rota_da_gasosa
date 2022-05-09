import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  './Main.css';
import { BsPlusCircle } from "react-icons/bs";
import tables from '../../utils/tables.json'
import { FlagDTO } from "../../model/FlagDTO";
import { FuelDTO } from "../../model/FuelDTO";
import { AvailableTimeDTO } from "../../model/AvailableTimeDTO";
import { PromotionDTO } from "../../model/PromotionDTO";
import { ServiceDTO } from "../../model/Service";
import FlagService from "../../services/flag-service";

interface State {
    flagList?: Array<FlagDTO>,
    fuelList?: Array<FuelDTO>,
    availableTimeList?: Array<AvailableTimeDTO>,
    promotionList?: Array<PromotionDTO>,
    serviceList?: Array<ServiceDTO>
}

class Main extends React.Component<State> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            flagList: [],
            fuelList: [],
            availableTimeList: [],
            promotionList: [],
            serviceList: []
        }

        this.getAllFlags = this.getAllFlags.bind(this);
        this.getAllFuels = this.getAllFuels.bind(this);
        this.getAllAvailableTimes = this.getAllAvailableTimes.bind(this);
        this.getAllPromotion = this.getAllPromotion.bind(this);
        this.getAllServices = this.getAllServices.bind(this);

        this.getAllFlags();
    }

    getAllFlags = () => {
        FlagService.getAll().then((result) => {
            this.setState({flagList: result});
        }, (error) => {
            console.log(error);
        })
    }

    getAllFuels = () => {

    }

    getAllAvailableTimes = () => {

    }

    getAllPromotion = () => {

    }

    getAllServices = () => {

    }
    
    render() {
        return (
            <div className='mt-5 row'>
                 {tables.map((table, i) => (
        
        <div className='col-xl-6 col-md-6 col-sm-12 mt-3' key={i}>  
        <div className="card-decker" >
           <div className="card containerCrud">
               <div className="card-header d-flex cardHeader">
                   <div>{table.name}</div>     
                   <div className="iconPlus"> <BsPlusCircle color="black" /></div>                   

               </div>
               <div className="card-body">
               <table className="table">
                    <thead>
                        <tr>
                        {table.fields.map((field, i) => (<th scope="col">{field.field}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        </tr>
                    </tbody>
                </table>
               </div>
           </div>
        </div>              
    </div>
                 ))}
                       
            </div>
        )
    }
}

export default Main;