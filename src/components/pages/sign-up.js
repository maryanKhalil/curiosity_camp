import './index.css';
import React, { Component } from "react";
import Footer from '../Footer';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { date } from 'assert-plus';

export default class signup extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
    
    handleChange(date) {
        this.setState({
          startDate: date
        })
      }
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }
    render() {
        // const [selectedDate, setSelectedDate] = useState(null)
        return (
            <div className="top">
            <div className="base-container">
                <div className="header"> Register <i class="fas fa-book-open"></i></div>
                <div className="content">
                <div className="form">
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                 <div className="form-group">
                 <label for="activities">Choose an Activity:</label>
                    <select name="activities" id="activities" className="form-control">
                    <option value="activity1" className="form-control">Available Activities</option>
                        <option value="activity1" className="form-control">Robotics</option>
                        <option value="activity2" className="form-control">Bottle Rockets</option>
                        <option value="activity3" className="form-control">Bursting Chemistry Solution</option>
                        <option value="actvity4" className="form-control">Code a Minecraft game</option>
                        <option value="activity5" className="form-control">Build a solar oven</option>
                        <option value="activity6" className="form-control">Ocean Exploration Tools</option>
                        <option value="activity7" className="form-control">Code a Robot</option>
                        <option value="actvity8" className="form-control">Air and Atmosphere</option>
                    </select>     
                </div> 
                <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Pick a time</label>
                    <DatePicker className="form-control"
                        selected={this.state.startDate}
                        onChange = {this.handleChange}
                        name="startDate"
                        minDate={new Date()}
                        placeholderText="Enter Date"
                        dateformat="dd/MM/yyyy"
                        filterDate={ startDate => startDate.getDay() != 6 & startDate.getDate() != 0}
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                </div> 
                </form>

                <br/>
                <button type="submit" className="btn ">Register</button>
                
            </div>
            </div>
            </div>
            <Footer/>
            </div>
        );
    }
}