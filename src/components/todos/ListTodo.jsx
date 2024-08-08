import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../hoc/Color';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Watching video' },
            { id: 'todo3', title: 'Play games' },
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({ 
            listTodos: [...this.state.listTodos, todo]
        });
        toast.success("Add successfully!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        });
        toast.success("Delete successfully!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;

        //Check editTodo rỗng hay không
        let isEmptyObj = Object.keys(editTodo).length === 0;
        
        // Nếu `editTodo` không rỗng và `id` của `editTodo` bằng với `id` của `todo`
        //Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            //Check title save empty
            if (editTodo.title.trim() === "") {
                toast.error("Please enter a title");
                return;
            }

            let listTodosCoppy = [...listTodos];
            //Tìm title tương ứng với id 
            let objIndex  = listTodosCoppy.findIndex((item => item.id === todo.id));
            listTodosCoppy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            }, () => {
                console.log("Check list todo :", this.state.listTodos);
            })
            toast.success("Update successfully!");
            return
        }
         // Nếu `editTodo` rỗng, bắt đầu chỉnh sửa `todo`
        //Update
        this.setState({
            editTodo: todo
        }, () => {
            // Log giá trị của editTodo sau khi cập nhật state
            console.log("Check edit todo :", this.state.editTodo);
        });
        
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo };
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        });
    }

    render() {

        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;


        return (
            <>
                <p>
                    Simple Todo App with React
                </p>
                <div className='list-todo-container'>
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input onChange={(event) => this.handleOnchangeEditTodo(event)} value={editTodo.title} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }

                                        <button className='btn-edit' onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj || editTodo.id !== item.id ? 'Edit' : 'Update'}
                                        </button>
                                        <button className='btn-delelte' onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })

                        }


                    </div>
                </div>
            </>
        )
    }

}

export default Color(ListTodo);