import logo from './logo.svg';
import React from "react";
import './App.css';
import BlogEntry from "./components/BlogEntry";
import {Button} from "./components/FancyButton";

function App() {
    // Variables
    // const firstStudent = "Horst";
    const students = [
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
    ]

    return (
        // Alles in ein TAG! --> Fragment REACT -> LOOK IT UP
        <React.Fragment>
            <header>MULTIBLOG</header>
                <div>
                    {students.map(student => <BlogEntry key={student.id}
                                                        id={"ID: " + student.id}
                                                        name={"Name: " + student.name}
                                                        university={"University: " + student.university}/>)}

                    <Button primary>This is a primary Button</Button>
                    <Button>  This is a normal Button </Button>
                </div>
        </React.Fragment>
    );
}

export default App;
