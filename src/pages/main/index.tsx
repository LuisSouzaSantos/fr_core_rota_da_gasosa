import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  './Main.module.css';

class Main extends React.Component<{}, {username: string, password: string}> {
    render() {

        return (
            <div className='mt-5 mr-5 ml-5 row'>
                <div className='col-xl-6 col-md-6 col-sm-12'>  
                    <div className="card-decker">
                       <div className="card">
                           <div className="card-header">
                               Flags
                           </div>
                           <div className="card-body">
                           <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                           </div>
                       </div>
                    </div>              
                </div>
                <div className='col-xl-6 col-md-6 col-sm-12'>  
                    <div className="card-decker">
                    <div className="card">
                           <div className="card-header">
                               Flags
                           </div>
                           <div className="card-body">
                           <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                           </div>
                       </div>
                    </div>              
                </div>            
            </div>
        )
    }
}

export default Main;