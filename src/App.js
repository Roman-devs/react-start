import logo from './logo.svg';
import './App.css';
import BlogEntry from "./components/BlogEntry";
import {Button} from "./components/FancyButton";
import React, { useState } from 'react';

function App() {
    // Variables
    // const firstStudent = "Horst";
    let students, setStudents;
    [students, setStudents] = useState([]);
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
            <h2 class={"multi"}>Gesichtsbuch 2.0</h2>
                <div>
                    {students.map(student => <BlogEntry key={student.id}
                                                        id={"ID: " + student.id}
                                                        name={"Name: " + student.name}
                                                        university={"University: " + student.university}
                                                        onDelete={()=>
                                                            { const updatedList = students.filter(item => item.id !== student.id);
                                                            setStudents(updatedList);
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

                    <Button primary onClick={() => {
                        const updatedList = [
                            ...students,
                            {id: "new-id",
                            name: "new student",
                            university: "super uni"}
                            ];
                        setStudents(updatedList);
                    }
                    }> Add new Gesicht
                    </Button>


                </div>
        </React.Fragment>
    );
}

export default App;
