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

    function loadStudentsFromApi(){
        getStudentsFromApi().then(data => setStudentsAPI(data));
    }

    /////////////////////////////////////////////////////////

    useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users/"+selectedStudentID)
        .then(response => setStudentsAPI(response.data))
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




                    <Button onClick={ () => setSelectedStudentID(selectedStudentID + 1)}> Next ID </Button>
                    <Button onClick={ () => setSelectedStudentID(selectedStudentID - 1)}> Previous ID </Button>

                    <StudentEntry email={studentsAPI.email} id={studentsAPI.id} name={studentsAPI.name} />



                </div>
        </React.Fragment>
    );
}

export default App;
