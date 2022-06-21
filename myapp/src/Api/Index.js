import axios from 'axios'
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
   
    
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      
      
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': '552c6d22f5msh1672dc86c2ee096p185bccjsnd230fe9d83da'
    }
  };
  
  
  
export const getplacedata=async()=>{
    try{

const {data:{data}}=await axios.get(URL,options);
return data;

    }catch(error){
console.log(error)

    }
}



