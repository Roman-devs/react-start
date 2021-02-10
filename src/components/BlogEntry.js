import {useState} from "react";
import {Button} from "./FancyButton";

export default function BlogEntry({id, name, university, onDelete}) {
    const [clicked, setClicked] = useState(0)

    return (
        <article>
            <h3 class={"name"}> {name} </h3>
            <div class={"entry"}>
                <p> {id} </p>
                <p> {university} </p>
                <p> {"Likes: " + clicked} </p>
                <Button onClick={() => setClicked(clicked + 1)}> Like </Button>
                <Button primary onClick={() => setClicked(clicked - 1)}> Dislike </Button>
                <Button onClick = {onDelete}> Delete </Button>
            </div>
        </article>
    )


}


