import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'

import { TiDelete } from 'react-icons/ti'
import { FaEdit } from 'react-icons/fa'  
import { TbListDetails } from 'react-icons/tb'

import { GetCategories } from "../api/api"

export function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await GetCategories();
          setCategories(response);
        } catch (error) {
          // Lida com erros
        }
      };
  
      fetchData();
    }, []);

    var index = 1

    return(
      <section >
          
        <Table id='list-table' className='container w-75' bordered striped variant='light' >

          <thead>

            <tr>
            
              <th colSpan={7} >
              <h4>Categories List</h4>
              </th>   

            </tr>

            <tr>

              <th>#</th>
              <th>Name</th>
              <th>Acronym</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>

          </thead>

          <tbody>
          {categories.map((category) => (
            <tr key={index}>
              <td>{index++}</td>
              <td>{category.Category1}</td>
              <td>{category.acronym}</td>
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