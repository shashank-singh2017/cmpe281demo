import React, { Component } from 'react';


import './App.css';
import Header from './Header';
import Footer from './Footer';

class UserDashboard extends Component {



  componentWillMount(){
    console.log("Airdata: ",this.props.airdata);
    console.log("Waterdata:",this.props.waterdata);
  }


  render() {
    return (
      <div className="container-fluid">
      <div className="row" style={{height: 60, backgroundColor: "#1B1B1B",marginTop:5,padding: 15, color: "white"}}>
        <div>
        <h4>User Dashboard</h4>
        </div>
        <div style={{float: "right",marginLeft: "50%"}}>
          <a href="/generateAirMetrics"><button className="btn btn-primary" style={{}}>Capture AirData</button></a>
          <a href="/generateWaterMetrics"><button className="btn btn-primary" style={{marginLeft: 20}}>Capture WaterData</button></a>
        </div>
      </div>

        <div className="row" style={{marginTop: 10}}>

          <div className="col-md-12" id="rightbody" >
          <br/>
              <h4 style={{textAlign: "left"}}>Air Quality Data</h4>
              <div className="air">
                 <div className="container-fluid">

                    <div className="row" style={{height: 40, borderBottom: "1px solid",marginTop: 3, paddingTop: 5, fontSize: 18, fontWeight: 600}}>
                      <div className="col-md-2" style={{marginLeft: "5%"}}>
                        Date
                      </div>
                      <div className="col-md-9">
                        Quality Metric and measurement
                      </div>

                    </div>

                {this.props.airdata.map(air => (
                    <div className="row" style={{height: 40, borderBottom: "1px solid",marginTop: 3, paddingTop: 5, fontSize: 18, fontWeight: 600}}>
                        <div className="col-md-2" style={{marginLeft: "5%"}}>
                          Date
                        </div>
                        <div className="col-md-9">
                          Monoxide: {air.monoxide}, Lead: {air.lead}, Nitrogen: {air.nitrogen}, Ozone: {air.ozone}, carbon: {air.carbon}
                        </div>

                    </div>
                    ))}
                </div>
              </div>
              <br/>
              <h4 style={{textAlign: "left"}}>Water Quality Data</h4>
              <div className="water">
                  <div className="container-fluid">

                     <div className="row" style={{height: 40, borderBottom: "1px solid",marginTop: 3,paddingTop: 5, fontSize: 18, fontWeight: 600}}>
                       <div className="col-md-2" style={{marginLeft: "5%"}}>
                         Date
                       </div>
                       <div className="col-md-9">
                         Quality Metric and Measurement
                       </div>

                     </div>


                    {this.props.waterdata.map(water => (
                     <div className="row" style={{height: 40, borderBottom: "1px solid",marginTop: 3, paddingTop: 5, fontSize: 18, fontWeight: 600}}>
                         <div className="col-md-2" style={{marginLeft: "5%"}}>
                           Date
                         </div>
                         <div className="col-md-9">
                            pH: {water.ph}, Temperature: {water.temp}, Oxygen Dissolved: {water.oxygen}, Color of Water: {water.color}
                         </div>

                     </div>
                     ))}
                 </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}


export default UserDashboard;
