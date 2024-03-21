import useFetch from './hooks/usefetch';
const Fetch = () => {
  
 const[text] =  useFetch('https://jsonplaceholder.typicode.com/todos')


  return (
    <div>
      
      {text.map((e,i) => (
       <li key={i}>{e.title}</li>
      ))}
    </div>
  );
};
export default Fetch;