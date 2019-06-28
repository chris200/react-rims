import React from 'react';
import fetch from 'isomorphic-fetch';

function getData() {
  //if(this.state.writing===false){
  //this.setState({'reading': true});
  this.setState({isLoading: true});
  fetch(API)
  .then(res => res.json())
  .then(data => this.setState({outputKp: data, 'isLoading': false}));
//}
}

const API = "/api/kpvalues/read.php";

class Kpform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writing:false,
      reading:false,

      data: {
        'kpvalue': ''
      },
      outputKp: {
        kpvalue: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    getData = getData.bind(this);
  }

  componentDidMount() {
    this.setState({reading: true});
    this.setState({isLoading: true});
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKp: data, 'isLoading': false}))
    .then(this.setState({reading: false}));

  }
  handleChange(event) {
    this.setState({
      'data': {
        'kpvalue': event.target.value
      }
    });

  }
  handleSubmit(event) {
    event.preventDefault();
    //this.setState({'writing':true});
    this.setState({'isLoading': true});
    const {data} = this.state;
    fetch('/api/kpvalues/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    }).then(response => response.json())
    //.then(this.setState({'writing':false}))
     .then(getData())

      .catch(err => {});

    //getData();
  }
  render() {
    const kpvalueprop=this.state.data.kpvalue;
    const {outputKp, isLoading} = this.state;

    if (isLoading) {

      return (<div>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type='number' id='kpvalue' value={kpvalueprop} placeholder='Kp' onChange={this.handleChange}/>
            <input className='' type='submit' value='Update'/>
          </div>
        </form>

        <div>Loading</div>
      </div>)
    } else {
      const isLoading = false;

      return (<div>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type='number' id='kpvalue'
              value={this.state.value} placeholder='Kp'
              onChange={this.handleChange}/>
            <input className='' type='submit' value='Update'/>
          </div>
        </form>
        <div>
          KpValue: {outputKp.kpvalue}
        </div>
      </div>)
    }

  }
}

export default Kpform
