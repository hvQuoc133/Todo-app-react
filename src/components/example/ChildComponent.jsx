import React from 'react';
import { toast } from 'react-toastify';

// class component   
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job);
        this.props.deleteAJob(job);
        toast.success("Delete successfully!");
    }

    render() {
        console.log('>>> Check props: ', this.props)

        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        //conditional : cau dieu kien true false
        let check = showJobs === true ? 'showJob = true' : 'showJob = false';
        console.log('>>> Check conditional: ', check)

        return (
            <>
                {showJobs === false ? <div><button className='btb-Show' onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


// //function component
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className='job-list'>
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}

//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;