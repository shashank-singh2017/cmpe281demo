import React, { Component } from 'react';

class AirForm extends Component {


  state={
      monoxide:'',
      lead:'',
      nitrogen:'',
      ozone:'',
      carbon:''
    }


  render() {
    return (

      <div className="container-fluid" >

      <div className="row" style={{height: 60, backgroundColor: "#1B1B1B", color: "white", marginTop:5,paddingTop: 15, paddingLeft: 20}}>
        <div>
        <h4>User Dashboard</h4>
        </div>
        <div style={{float: "right",marginLeft: "70%"}}>
          <a href="/"><button className="btn btn-primary" style={{}}>User Dashboard</button></a>
        </div>
      </div>
      <br/>
      <h3>Submit Air Quality Data</h3>
      <div className="row">

        <div className="col-md-5" style={{border: "1px solid", passing: 10, marginLeft: "28%", marginTop: 10}}>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Carbon Monoxide Level</label>
              <input type="text" className="form-control" placeholder="Carbon Monoxide Level " value={this.state.monoxide} onChange={(event) => {
                this.setState({
                  monoxide: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Lead Level</label>
              <input type="text" className="form-control" placeholder="Lead Level  " value={this.state.lead} onChange={(event) => {
                this.setState({
                  lead: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Nitrogen Dioxide Level</label>
              <input type="text" className="form-control" placeholder="Nitrogen Dioxide Level " value={this.state.nitrogen} onChange={(event) => {
                this.setState({
                  nitrogen: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Ozone Level</label>
              <input type="text" className="form-control" placeholder="ozone Level " value={this.state.ozone} onChange={(event) => {
                this.setState({
                  ozone: event.target.value
                });
              }}/>
            </div>

            <div className="form-group" style={{marginTop: 20}}>
              <label style={{float: "left"}}>Carbon Dioxide Level</label>
              <input type="text" className="form-control" placeholder="Carbon dioxide Level " value={this.state.carbon} onChange={(event) => {
                this.setState({
                  carbon: event.target.value
                });
              }}/>
            </div>

            <button type="submit" className="btn btn-primary" style={{marginBottom: 20}} onClick={()=>{this.props.submitAir({monoxide:this.state.monoxide,lead:this.state.lead,nitrogen:this.state.nitrogen,ozone:this.state.ozone,carbon:this.state.carbon})}}>Submit</button>

        </div>

      </div>

      </div>
    );
  }
}

export default AirForm;
