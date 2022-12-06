import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeFar = this.handleChangeFar.bind(this);
    this.handleChangeCel = this.handleChangeCel.bind(this);
    this.handleChangeKel = this.handleChangeKel.bind(this);
    this.state = {far: '', cel: '', kel: ''};
  }

  handleChangeKel (event) {
    event.preventDefault();
    const kel = Number(event.target.value) === 0 ? '' : Number(event.target.value);
    this.setState({
      kel: kel, 
      far: ((Number(kel) * 9/5) - 459.67).toFixed(2),
      cel: (Number(kel) - 273.15).toFixed(2)
    })
  }

  handleChangeCel (event) {
    event.preventDefault();
    const cel = Number(event.target.value) === 0 ? '' : Number(event.target.value);
    this.setState({
      cel: cel, 
      far: ((Number(cel) * 1.8) + 32).toFixed(2),
      kel: (Number(cel) + 273.15).toFixed(2)
    })
  }

  handleChangeFar (event) {
    event.preventDefault();
    const far = Number(event.target.value) === 0 ? '' : Number(event.target.value);
    this.setState({
      far: far,
      cel: ((Number(far) - 32) / 1.8).toFixed(2), 
      kel: ((Number(far) + 459.67) * (5 / 9)).toFixed(2)
    })
  }

  render() {
    const far = this.state.far;
    const cel = this.state.cel;
    const kel = this.state.kel;
    return (
      <div className="App">
          <div className='calc_body col-md-3'>
              <p className='test p-2'>Преобразователь температур</p>
              <Form className='p-3'>
              <Form.Group className="row col-md-auto">
                  <Form.Label>Градусы по Фаренгейту:</Form.Label>
                  <Form.Control
                    className = "mb-2"
                    type="number"
                    step = "0.01" 
                    value={far}
                    onChange={this.handleChangeFar}
                  />
                  <Form.Label>Градусы по Цельсию:</Form.Label>
                  <Form.Control 
                    className = "mb-2"
                    type="number"
                    step = "0.01"
                    value={cel}
                    onChange={this.handleChangeCel}
                  />
                  <Form.Label>Градусы по Кельвину:</Form.Label>
                  <Form.Control 
                    className = "mb-2"
                    type="number"
                    step = "0.01"
                    value={kel}
                    onChange={this.handleChangeKel}
                  />
                </Form.Group>
              </Form>
          </div>     
      </div>
    );
  }
}

export default App;
