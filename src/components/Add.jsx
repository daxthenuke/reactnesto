import React, { useState } from 'react' ;
import {Link} from 'react-router-dom';
import axios from 'axios';


function Add() {
    const [formData, setFormData] = useState({fullName: '', email: ''})

    const sendFromData = () => {
        axios.post('/neki-url', formData)
        .then(response => {

        })
        .catch(error => {

        })
    }

    return (
        < table className="table table-bordered">
        <tr>
            <th>Full Name</th>
            <td>
                <input type="text" className= "form-control" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}/>
            </td>
       
        </tr> 
        <tr>
            <th>Email</th>
            <td>
                <input type="text" className= "form-control" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </td>
        </tr>
        <tr>
            <th>Contact</th>
            <td>
                <input type="text" className= "form-control"/>

            </td>
        </tr>
        <tr>
            <th>Address</th>
            <td>
                <input type="text" className= "form-control"/>

            </td>
        </tr>
        
        <tr>
            <td colSpan="2">
                <input onClick={sendFromData} type ="submit" className="btn btn" />
            </td>
        </tr>

        </table>
    );

}


export default Add ;