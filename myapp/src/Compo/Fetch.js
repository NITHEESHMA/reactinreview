import React,{useState,useEffect} from 'react';

const Fetch = () => {
    const[repo,setRepo]= useState([]);
    const[search,setSearch]=useState("")

    const fetchdata=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        const jsondata=await response.json();
        console.log(jsondata);
        setRepo([...repo,...jsondata]);
    }

    useEffect(() => {
        
      fetchdata();
        
    }, []);
    return (
        <div>
        <div>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder="search"/>
        </div>
        <div>
        {repo.filter((items)=>{
            if(search==""){
                return items;
            }
            else(){
                repo.name.toLowercase().includes(search.toLocaleLowerCase())
            }
        })}
        </div>
            {repo.map((item)=>
            //     (
            //     <ul key={item.id}>
            //     <li>
            //  <p>{item.name}</p>
            //  <p>{item.email}</p>   
                
            //     </li>
                
            //     </ul>
            // 
            
            //)
            {
                return(
                    <>
<ul key={item.id}>
<li>{item.name}</li>
<li>{item.email}</li>

</ul>

                    </>
                )
            }
            )}
            
        </div>
    );
};

export default Fetch;