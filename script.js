const  image=document.querySelector("#img");
const btn=document.querySelector('#btn');

const myapi="https://picsum.photos/200"

btn.addEventListener("click",()=>{
   getmyimage();
})


async function getmyimage() {
    try{
    const response=await fetch(myapi);
  
   
image.src=response.url;

   

    }
    catch(error){
     console.error("Error fetching image:", error);
        
    }
    
    
}

