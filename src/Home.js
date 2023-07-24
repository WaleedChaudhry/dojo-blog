
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
        
    const {data:blogs,ispending,error}=useFetch("http://localhost:8000/blogs")
   return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {ispending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;
// key is used to check unique value on dom
// map is used to list all items
//There we used props by passing the Blogs={Blogs} which define all the values in blogList of Blogs title id etc.Instead of coping all data we just use props.
//"props make code more resuable"
//useEffect ran on every time when we rendered the data or changed the data or we can also pass argument to change state on a specific change
//useEffect hook may ran twice because our application render is in strict mode but if we erase strict mode our problem will be solved
//And operator is used because at starting the value of blog is null and iut take some time to load the data from json.
//React roter hma asani paida krta hai ka hma bar bar server ko request na bhajni para koi new page pa jana ka lia for that we just add react router it act as a bridge between react page and server and get specific page from react bundle.