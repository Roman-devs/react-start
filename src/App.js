import logo from './logo.svg';
import './App.css';
import BlogEntry from "./BlogEntry";
// import './BlogEntry.js';

function App() {
  // Variables
  // const firstStudent = "Horst";
  const students = [
      {
        id: "1",
        name:"Franky",
        university: "Trier"
  },
    {
        id: "2",
        name:"Franzi",
        university: "Bochum"
  },
    {
        id: "3",
        name:"Maria",
        university: "Hamburg"
  },
    {
        id: "4",
        name:"Horst",
        university: "Grevenbroich"
  }
  ]

  return (
      <div>
      {students.map(student => <BlogEntry key={student.id}
                                          id={"ID: " + student.id}
                                          name={"Name: " + student.name}
                                          university={"University: " + student.university}/>)}
      </div>
  );
}

export default App;
