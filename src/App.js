import logo from './logo.svg';
import './App.css';
import BlogEntry from "./components/BlogEntry";
import {Button} from "./components/FancyButton";
import AddStudentForm from "./components/AddStudentForm";
import {getAdressFromStudents, getStudentsFromApi} from "./services/getStudentsFromApi";
import axios from "axios";
import StudentEntry from "./components/StudentEntryAPI";
import React, { useState, useEffect } from 'react';

function App() {

    const [studentsAPI, setStudentsAPI] = useState({});
    const [selectedStudentID, setSelectedStudentID] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    function loadStudentsFromApi(){
        getStudentsFromApi().then(data => setStudentsAPI(data));
    }

    /////////////////////////////////////////////////////////

    useEffect(()=> {
        setIsLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users/"+selectedStudentID)
        .then(response => setStudentsAPI(response.data))
        .then(() => setIsLoading(false))
        .catch(()=> setIsLoading(false));
    },[selectedStudentID])


    useEffect(()=> {
        loadStudentsFromApi();
    }, [])

    /////////////////////////////////////////////////////////

    return (

        // Alles in ein TAG! --> Fragment REACT -> LOOK IT UP
        <React.Fragment>
            <h2 className={"multi"}>Gesichtsbuch 2.0</h2>
            <div>
                {isLoading && <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>}







                    {!isLoading && studentsAPI &&
                    <Button disabled={isLoading} onClick={ () => setSelectedStudentID(selectedStudentID + 1)}> Next ID </Button>}
                {!isLoading && studentsAPI &&
                    <Button onClick={ () => setSelectedStudentID(selectedStudentID - 1)}> Previous ID </Button>}
                {!isLoading && studentsAPI &&
                    <StudentEntry email={studentsAPI.email} id={studentsAPI.id} name={studentsAPI.name}/>}



                </div>
        </React.Fragment>
    );
}

export default App;
