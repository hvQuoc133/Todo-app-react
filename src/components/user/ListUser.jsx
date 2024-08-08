import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ListUser.scss'

const ListUser = () => {
    const [listUser, setListUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await axios.get('https://reqres.in/api/users?page=1');
            setListUser(res.data.data);
        };

        fetchUsers();
    }, []);

    const handleViewDetailUser = (user) => {
        navigate(`/user/${user.id}`);
    };

    return (
        <div className="list-user-container">
            <div className="title">Fetch all list users</div>
            <div className="list-user-content">
                {listUser && listUser.length > 0 && listUser.map((item, index) => {
                    return (
                        <div className="child" key={item.id} onClick={() => handleViewDetailUser(item)}>
                            {index + 1} - {item.first_name} {item.last_name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListUser;
