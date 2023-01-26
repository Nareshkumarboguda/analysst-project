import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import "./CardContainer.css"
function CardContainer() {
  const [data, setData] = useState(null);
  const [perPage, setPerPage] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber]= useState(1);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setPerPage(data.slice((pageNumber*3)-3,pageNumber*3));  
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [pageNumber]);

  // To display different pages

  const pageHandler = (number)=>{
      setPageNumber(number);
      // console.log(number);
  }
  // handling less then & greater then buttons

  const handleSwitch =(number) =>{
    if(pageNumber > 1 || number === 1) {
      setPageNumber(pageNumber+number)
      // console.log(pageNumber)
    }
 
    }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  
  return (
    <div className='container'>   
      {perPage.map((user) => <Card user={user}/> ) } 
      <Pagination totalPages={Math.ceil(data.length/3)} pageHandler={pageHandler} handleSwitch={handleSwitch} pageNumber={pageNumber}/>
    </div>
  );
}

export default CardContainer;
