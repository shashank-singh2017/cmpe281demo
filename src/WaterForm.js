import React, { Component } from 'react';

class WaterForm extends Component {

  state={
      ph:'',
      temp:'',
      oxygen:'',
      color:''
    }

  render() {
    return (

      <div className="container-fluid" >
      <div className="row" style={{height: 60, backgroundColor: "#1B1B1B",color: "white",marginTop:5,paddingTop: 15, paddingLeft: 20}}>
        <div>
        <h4>User Dashboard</h4>
        </div>
        <div style={{float: "right",marginLeft: "70%"}}>
          <a href="/"><button className="btn btn-primary" style={{}}>User Dashboard</button></a>

        </div>
      </div>
      <br/>
      <h3>Submit Water Quality Data</h3>
      <div className="row">

        <div className="col-md-5" style={{border: "1px solid", passing: 10, marginLeft: "28%", marginTop: 10}}>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>pH Level</label>
              <input type="text" className="form-control" placeholder="Ph level " value={this.state.ph} onChange={(event) => {
                this.setState({
                  ph: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Water Temperature</label>
              <input type="text" className="form-control" placeholder="water temperature  " value={this.state.temp} onChange={(event) => {
                this.setState({
                  temp: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Dissolved Oxygen Level</label>
              <input type="text" className="form-control" placeholder="Oxygen level  " value={this.state.oxygen} onChange={(event) => {
                this.setState({
                  oxygen: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Color</label>
              <input type="text" className="form-control" placeholder="color of Water " value={this.state.color} onChange={(event) => {
                this.setState({
                  color: event.target.value
                });
              }}/>
            </div>

            <button type="submit" className="btn btn-primary" style={{marginBottom: 20}} onClick={()=>{this.props.submitWater({ph:this.state.ph,temp:this.state.temp,oxygen:this.state.oxygen,color:this.state.color})}}>Submit</button>

        </div>

      </div>

      </div>
    );
  }
}

export default WaterForm;
