import Button from 'react-bootstrap/Button';

export function Home() {
    return(
        <div className='homeSection'>
        
        <Button  href='/EmployeesList' variant="primary">Employees</Button>
        <Button  href='/CategoriesList' variant="primary">Categories</Button>
       
        </div>
    )
}