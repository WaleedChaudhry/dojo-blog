import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetail = () => {

    const {id}=useParams();
    const {data:blog , error , ispending}=useFetch("http://localhost:8000/blogs/"+ id);
    const history=useHistory();
    const HandleClick=()=>{
        fetch("http://localhost:8000/blogs/"+ blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.go(-1);
            // alert("blog deleted")
        }
           
        )
    }
    return ( 
        <div className="blog-details">
           
            {ispending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>Blog Detail-{id}</h1>
                    <h2>{blog.title}</h2>
                    <h3>Written By {blog.author}</h3>
                    <p>{blog.Body}</p>
                    <button onClick={HandleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;