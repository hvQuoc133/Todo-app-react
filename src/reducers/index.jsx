import { combineReducers } from 'redux';
import yourReducer from './userReducer';

// Tập hợp tất cả các reducers con thành reducer gốc (rootReducer)
const rootReducer = combineReducers({
  users: yourReducer, // Phần state 'users' được quản lý bởi userReducer
});

export default rootReducer;