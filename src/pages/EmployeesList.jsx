import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'

import { TiDelete } from 'react-icons/ti'
import { FaEdit } from 'react-icons/fa'  
import { TbListDetails } from 'react-icons/tb'

import { GetEmployees } from "../api/api"

export function EmployeesList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await GetEmployees();
          setEmployees(response);
        } catch (error) {
          // Lida com erros
        }
      };
  
      fetchData();
    }, []);

    return(
      <section >
          
        <Table id='list-table' className='container w-75' bordered striped variant='light' >

          <thead>

            <tr>
            
              <th colSpan={7} >
              <h4>Employees List</h4>
              </th>   

            </tr>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Acronym</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>

          </thead>

          <tbody>
          {employees.map((employee) => (
            <tr key={employee.Id}>
              <td>{employee.Id}</td>
              <td>{employee.Name}</td>
              <td>{employee.Category1.Category1}</td>
              <td>{employee.Category}</td>
              <td><TbListDetails className='icon' /></td>
              <td><FaEdit  className='icon' /></td>
              <td><TiDelete className='icon' /></td>

            </tr>
          ))}
          </tbody>

        </Table>
          
      </section>
    )
}