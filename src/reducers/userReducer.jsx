const initialState = {
    users: [
      { id : 1, name : 'Quoc'},
      { id : 2, name : 'Learn React'},
      { id : 3, name : 'React Node SQL'}
    ],
    post : []
  };
  //reducer con quản lý người dùng
  const yourReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_USER': 
        let users = state.users;
        users = users.filter(item => item.id !== action.payload.id)
        return {
          ...state, users
        };
      case 'CREATE_USER':
        let id = Math.floor(Math.random() * 10000)
        let user = { id: id, name: `random - ${id}` }
        return{
          ...state, users: [...state.users, user]
        }

      default:
        return state;
    }
  };
  
  export default yourReducer;