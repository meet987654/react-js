import {useEffect, useState} from 'react'

function useFetch(url){
  const [loading, setLoading]= useState(true);
  const [data, setData]= useState({});

  async function getDetails(){
    
    const response=await fetch(url)
    const json= await response.json()
    setData(json)
    setLoading(false)
    
    
}

  useEffect(()=>{
    getDetails()
  },[url])

  return {loading, data}
}
function App(){

 const [currentPage, setCurrentPage]=useState(1)

  const {loading, data}= useFetch(` https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)

  if(loading){
    return <div>Loading...</div>
  }
  return(
    
      <div>
    <button onClick={()=>setCurrentPage(1)}>1</button>
    <button onClick={()=>setCurrentPage(2)}>2</button>
    <button onClick={()=>setCurrentPage(3)}>3</button>
        {JSON.stringify(data)}
      </div>
  )
}

export default App
