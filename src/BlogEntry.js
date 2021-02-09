export default function BlogEntry({id, name, university}){
    return(<article> <h3 class={"name"}> {name} </h3> <div class={"entry"}><p> {id} </p> <p> {university} </p></div></article>)
}
