import logo from './logo.svg';
import './App.css';
import BlogEntry from "./components/BlogEntry";
import {Button} from "./components/FancyButton";
import React, { useState } from 'react';
import AddStudentForm from "./components/AddStudentForm";
import {getAdressFromStudents, getStudentsFromApi} from "./services/getStudentsFromApi";
import axios from "axios";
import StudentEntry from "./components/StudentEntryAPI";

function App() {
    // Variables
    // const firstStudent = "Horst";
    const [students, setStudents] = useState([]);
    const [studentsAPI, setStudentsAPI] = useState([]);

    // const axiosResponse = getStudentsFromApi().then(response => { console.log(response.data); setStudents(response.data)})
    function loadStudentsFromApi(){
    getStudentsFromApi().then(data => setStudentsAPI([...students, ...data]));
    }

    // const students = [
    //     {
    //         id: "1",
    //         name: "Franky",
    //         university: "Trier"
    //     },
    //     {
    //         id: "2",
    //         name: "Franzi",
    //         university: "Bochum"
    //     },
    //     {
    //         id: "3",
    //         name: "Maria",
    //         university: "Hamburg"
    //     },
    //     {
    //         id: "4",
    //         name: "Horst",
    //         university: "Grevenbroich"
    //     }
    // ]

    return (
        // Alles in ein TAG! --> Fragment REACT -> LOOK IT UP
        <React.Fragment>
            <h2 className={"multi"}>Gesichtsbuch 2.0</h2>
                <div>
                    {students.map(student => <BlogEntry key={student.id}
                                                        id={"ID: " + student.id}
                                                        name={"Name: " + student.name}
                                                        university={"Uni: " + student.university}
                                                        onDelete={()=>
                                                            { const updatedList = students.filter(item => item.id !== student.id);
                                                            setStudents(updatedList);
                                                            }
                                                        }/>)
                    }

                    {studentsAPI.map(studentAPI => <StudentEntry key={studentAPI.id}
                                                        id={"ID: " + studentAPI.id}
                                                        name={"Name: " + studentAPI.name}
                                                        email={"Email: " + studentAPI.email}
                                                        phone={"phone: " + studentAPI.phone}
                                                        adress={"Adress: " + studentAPI.adress}
                                                                 onDelete={()=>
                                                        { const updatedList = studentsAPI.filter(item => item.id !== studentAPI.id);
                                                            setStudentsAPI(updatedList);
                                                        }
                                                        }/>)
                    }

                    <Button primary onClick={() => setStudents([
                            {
                                id: "1",
                                name: "Franky",
                                university: "Trier"
                            },
                            {
                                id: "2",
                                name: "Franzi",
                                university: "Bochum"
                            },
                            {
                                id: "3",
                                name: "Maria",
                                university: "Hamburg"
                            },
                            {
                                id: "4",
                                name: "Horst",
                                university: "Grevenbroich"
                            }
                        ])}>SPIN 'EM IN!
                    </Button>

                    <AddStudentForm onAdd={
                        newStudent => setStudents([...students, newStudent])
                    }> Add new human! </AddStudentForm>

                    <Button onClick={ () => loadStudentsFromApi()}> Get Students From API </Button>

                    {/*<Button primary onClick={() => {*/}
                    {/*    const updatedList = [*/}
                    {/*        ...students,*/}
                    {/*        {id: "new-id",*/}
                    {/*        name: "new student",*/}
                    {/*        university: "super uni"}*/}
                    {/*        ];*/}
                    {/*    setStudents(updatedList);*/}
                    {/*}*/}
                    {/*}> Add new human!*/}
                    {/*</Button>*/}


                </div>
        </React.Fragment>
    );
}

export default App;
