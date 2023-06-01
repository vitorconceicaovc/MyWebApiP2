import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'

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
            
              <th colSpan={4} >
              <h4>Employees List</h4>
              </th>   

            </tr>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Acronym</th>
              
            </tr>

          </thead>

          <tbody>
          {employees.map((employee) => (
            <tr key={employee.Id}>
              <td>{employee.Id}</td>
              <td>{employee.Name}</td>
              <td>{employee.Category1.Category1}</td>
              <td>{employee.Category}</td>
            </tr>
          ))}
          </tbody>

        </Table>
          
      </section>
    )
}