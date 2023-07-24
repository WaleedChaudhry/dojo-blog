//import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
        
           <div className="links">
            <a href="/">Home</a>
            <a href="/create" className="blog">New Blog</a>
            
           </div>
        </nav>
     );
}
 
export default Navbar;
//Link tag to use tb krta hain jb hm route use krta hain is sa ya faida hota haka hma bar bar html page sa request laka load nhi krna prta hai directly hm loaded cheez ko hi rote krdeta hain.Magar is sa aik masla hota haka hmara useEffect bar bar itna jldi call nhi hoskta hai iska lia hma apna useEffect to  cleanup krna prta hai.....Isi cleanup ko hm Abort controller b khta hain