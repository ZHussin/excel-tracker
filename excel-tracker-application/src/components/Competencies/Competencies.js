import React from 'react';
import {
  withRouter
} from 'react-router-dom'

import Header from '../Home/Header.js';
import CompetenciesList from './CompetenciesList.js';
import { Input } from '@material-ui/core';
import UserServices from '../../services/UserServices';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem} from '@material-ui/core';
import CompetencyServices from '../../services/CompetencyServices';

import '../../styles/Users.css';
import '../Common/CreateCompetencyButton'
import CreateCompetencyButton from '../Common/CreateCompetencyButton';

class Competencies extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        selected: "All",
        competencies: "",
        domains: ["All", ...CompetencyServices.getCompetencyDomains()]
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChangeTL = this.handleChangeCompetencies.bind(this);
  }


  handleLogout() {
    this.props.history.push('/');
  }
  handleChange(value) {
    this.setState({selected: value });

  }

  handleChangeCompetencies(value) {
    this.setState({competencies: value})
    console.log(this.state.competencies)
  };


  render() {
      return (
        
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Competencies"/>
          <div className="Users">
        
          
        {/* <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '250px 250px 250px', 'justify-content':'center', 'grid-gap': '80px'}}> */}

        <div className="flex-grid">
        <div className="col">
        <Input
          type = "text"
          placeholder="Search"
          onChange={ event => this.handleChangeCompetencies(event.target.value) } 
          />
        </div>
        
        <div className="col">
          <InputLabel id="label">Filter by</InputLabel>
            <Select labelId="label" 
            id="select" 
            value={this.state.selected}
            onChange={event => this.handleChange(event.target.value)}>
            {this.state.domains.map(domain => (
             <MenuItem value = {domain}>{domain}</MenuItem>
            ))}

            </Select>
        </div>

        <div className ="col">
            <CreateCompetencyButton buttonTitle="Create" title="Create Competency"/>
          </div>

        </div>
        {/* </Container> */}


          <div className='tc'>
              
          <h1>Competencies List</h1>
          <CompetenciesList Competencies={UserServices.searchCompetencies(this.state.competencies).filter(competency => {
            return competency.domain === this.state.selected || this.state.selected === "All";
          })}
           prop= {this.props}/> 
          </div>
          
          <br></br>
         
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Competencies);
