import React from 'react';
import AdminNavbar from './AdminNavbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({ children }) {
    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <ToastContainer />
            <AdminNavbar />
            {children}
        </div>
    )
}
