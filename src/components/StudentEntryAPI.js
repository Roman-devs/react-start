import {useState} from "react";
import {Button} from "./FancyButton";

export default function StudentEntry({id, name, email, phone, adress ,onDelete}) {
    const [clicked, setClicked] = useState(0)

    return (
        <article>
            <h3 className={"name"}> {name} </h3>
            <div className={"entry"}>
                <p> {id} </p>
                <p> {email} </p>
                <p> {phone} </p>
                <p> {adress} </p>
                <p> {"Likes: " + clicked} </p>
                <Button onClick={() => setClicked(clicked + 1)}> Like </Button>
                <Button primary onClick={() => setClicked(clicked - 1)}> Dislike </Button>
                <Button onClick = {onDelete}> Delete </Button>
            </div>
        </article>
    )


}


