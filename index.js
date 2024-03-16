"use strict";

let getInfoDataBase = document.getElementById("getBtn");
let PostInfoDataBase = document.getElementById("postBtn");

let dataUpdatedInfo;

getInfoDataBase.addEventListener("click",getData);


function getData(){
fetch("http://localhost:3000/user")
.then(res => res.json())
.then(data=> {
   let data_Info = data;
   dataUpdatedInfo = data_Info.filter(item=>{
    return item.Status === "Active"
   })
   console.log(dataUpdatedInfo);
})
.catch(error => console.log("Somthing went wrong",error))
}

function postData(){
    fetch("http://localhost:3000/user",{
       method:"POST",
       headers:{
        "Content-type":"application/json"
       },
       body:JSON.stringify(dataUpdatedInfo)
    })
    .then(response =>{
        console.log(response);
        if(!response.ok){
            console.log("Response is not Okay");}
         })
    .catch(err => console.log("You have Error",err))
};

PostInfoDataBase.addEventListener("click",postData)
