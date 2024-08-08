import React from "react";
import { toast } from 'react-toastify';
class AddComponent extends React.Component {

    state = {
        title: "",
        salary: ""
    }
    handlechangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlechangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            toast.error("Please Enter!");
            return;
        }
        console.log('>>> Check data input', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        toast.success("Add successfully!");
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label> <br />
                <input id='fname' type="text" value={this.state.title} onChange={(event) => this.handlechangeTitleJob(event)} /> <br />

                <label htmlFor="lname">Salary:</label> <br />
                <input id='lname' type="text" value={this.state.salary} onChange={(event) => this.handlechangeSalary(event)} /> <br />

                <input onClick={(event) => this.handleSubmit(event)} type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddComponent;