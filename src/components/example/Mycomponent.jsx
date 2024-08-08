import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Mycomponent extends React.Component {

    /*
 Cú pháp JSX trả ra html(giao diện)
 Sài {} để sử dụng js trong thẻ html 
 Jsx sẽ trả được 1 phần tử, 2 phần tử sẽ sai nhưng bọc 2 phần tử trong 1 the thì đúng (<React.Fragment>)
 State: cập nhật dữ liệu liên tục mà không cần tải lại trang 
 */

    // object: key and value
    state = {
        arrJobs: [
            {
                id: 'It1',
                title: 'Lap trinh webstie',
                salary: '500$'
            },
            {
                id: 'It2',
                title: 'Lap trinh mobile',
                salary: '400$'
            },
            {
                id: 'It3',
                title: 'Lap trinh game',
                salary: '600$'
            }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        //...this.state.arrJobs lấy tất cả các phần tử trước của mảng, job: job vừa được thêm

    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate (prevProps, prevState){
        console.log('>>> Run didupdate: ', 'Prev state: ', prevState, 'Current state: ', this.state)
    }

    componentDidMount () {
        console.log('>>> Run didmount: ')
    }

    render() {
        console.log('>>> Call render', this.state)

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />
                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob} 
                />
            </>
        )
    }
}

export default Mycomponent;