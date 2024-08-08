import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const DetailUser = () => {
    const { id } = useParams(); // Lấy id từ URL
    const navigate = useNavigate(); // Hook để điều hướng
    const [user, setUser] = useState(null); // State để lưu thông tin người dùng
    const [isLoading, setIsLoading] = useState(true); // State để quản lý trạng thái loading

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching the user data", error);
                toast.error("Id error");
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleButton = () => {
        navigate('/user');
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <div>
                <button type='button' onClick={handleButton}>Back</button>
                </div>
        </div>
    );
};

export default DetailUser;