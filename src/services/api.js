import axios from "axios";
const apiloguin = axios.create({
    baseURL:"https://api1.mergulharte.app.br/api/v1",
    //baseURL:"https://localhost/api/public/api/v1",
  })
  export{
      apiloguin
  }