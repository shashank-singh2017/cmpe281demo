import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import UserDashboard from './UserDashboard';
import AirForm from './AirForm';
import WaterForm from './WaterForm';


class NewerHomePage extends Component {

  state={
    airData: [],
    waterData: []
  }

  submitAir = (data) => {
    var airData1 = this.state.airData;
    airData1.push(data);
    this.setState({
      airData: airData1
    });
      this.props.history.push("/");
    };

    submitWater = (data) => {
      var waterData1 = this.state.waterData;
      waterData1.push(data);
      this.setState({
        waterData: waterData1
      });
        this.props.history.push("/");
      };




    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"white"}}>

                <Route exact path="/" render={() => (
                    <div>
                        <UserDashboard airdata={this.state.airData} waterdata={this.state.waterData}/>
                    </div>
                )}/>

                <Route exact path="/generateAirMetrics" render={() => (
                    <div>
                        <AirForm submitAir={this.submitAir}/>
                    </div>
                )}/>

                <Route exact path="/generateWaterMetrics" render={() => (
                    <div>
                        <WaterForm submitWater={this.submitWater}/>
                    </div>
                )}/>

            </div>
        );
    }
}

export default withRouter(NewerHomePage);
