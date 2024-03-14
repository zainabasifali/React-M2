let list = [{
    name:"Home",
    link:"/"
},
{
    name:"About",
    link:"/"
},{
    name:"Contact",
    link:"/"
},{
    name:"Gallery",
    link:"/"
}];

let List = ()=>{
    return(
        list.map((element,i)=>{
            return(
          <li key={i} >{element.name}</li>
            )
        })
    )
}
export default List;