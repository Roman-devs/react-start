import axios from "axios";

export function getStudentsFromApi(){
    return axios.get("https://jsonplaceholder.typicode.com/users").then(response => response.data);
}

export function getAdressFromStudents(){
    return getStudentsFromApi().then(data1 => data1.address)
}