import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title,settitle]=useState('');
    const [Body,setBody]=useState('');
    const [author,setauthor]=useState('waleed');
    const[ispending,setispending]=useState(false);
    const history=useHistory();


    const HandleSubmit =(e)=>{
        e.preventDefault();
        const blog={title,Body,author};
        setispending(true);
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Submitted");
             alert("Blog Added");
            setispending(false);
            history.go(-1);
            // history.push('/');
        })
       
    }
    return (
        <div className="create">
            <h1>Add a new Blog</h1>
            <form onSubmit={HandleSubmit}>
                <label>
                    Blog Title:
                </label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=>{settitle(e.target.value)}}
                />
                <label>
                    Blog body:
                </label>
                <textarea 
                required
                value={Body}
                onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>
                    Blog author:
                </label>
                <select 
                value={author}
                onChange={(e)=>{setauthor(e.target.value)}}
                >
                    <option value="waleed">waleed</option>
                    <option value="Ahmed">Ahmed</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding Blog.....</button>}
            </form>
        </div>
      );
}
 
export default Create;
//useHistory() hook is used to redirect our page to previous page