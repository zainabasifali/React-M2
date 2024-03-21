const LocalStorage = (prop)=>{
    localStorage.setItem('username',JSON.stringify(prop.data2))
    return(
        <h3>The updated user name is : {prop.data2}</h3>
    )
}
export default LocalStorage;
