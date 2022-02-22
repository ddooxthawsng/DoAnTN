import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import Login from "./Components/Login";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./Modal/AddRoomModal";
import InviteMemberModal from "./Modal/InviteMemberModal";
function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
              <AppProvider>
            <Routes>
              <Route element={<Login/>} path='/login' />
              <Route element={<ChatRoom/>} path='/' />
            </Routes>
                  <AddRoomModal/>
                  <InviteMemberModal/>
              </AppProvider>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
