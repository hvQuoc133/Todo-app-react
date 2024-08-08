import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Color from '../hoc/Color';
import LogoHome from '../../assets/vite+react.png';
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

function Home(props) {
  console.log('Check props: ', props.dataRedux);
  let listUsers = props.dataRedux || [];  

  const handleDeleteUser = (user) => {
    props.deleteUserRedux(user);
    toast.success("Delete user success");
  }

  const handleCreateUser = () => {
    props.addUserRedux()
    toast.success("Add user success");
  }
  return (
    <>
    <div>Home page React</div>
    <div>
      <img src={LogoHome} style={{width: '350px', height: '150px', borderRadius: '10px', marginTop: '20px'}}/>
    </div>
    <div>
        {listUsers && listUsers.length > 0 ? (
          listUsers.map((item, index) => (
            <div key={item.id}>
              {index + 1} - {item.name} 
              &nbsp; <span onClick={() => handleDeleteUser(item)}>x</span>
            </div>
          ))
        ) : (
          <div>No users found</div>
        )}
        <button onClick={() => handleCreateUser()}>Add New</button>
      </div>

    </>
  );
}

// Hàm mapStateToProps để lấy dữ liệu từ Redux store
const mapStateToProps = (state) => {
    return {  
      dataRedux: state.users.users
    }
};

const mapDispatchToProps = (dispatch) => {
     return {
        deleteUserRedux: (userDelete) => dispatch ({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
               
     }
}

// Liên kết redux với react trang home và bọc với Color HOC
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));