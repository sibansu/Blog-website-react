import React, {Component} from 'react';
import axios from 'axios';
import './Blogs.css';
import { Link } from "react-router-dom";
import BlogCard from './BlogCards/BlogCard';

class Blogs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blogs: []
      };
    }
    componentDidMount() {
        axios
          .get('http://localhost:5000/api/blogs')
          .then(res => {
            this.setState({
              blogs: res.data
            })
          })
          .catch(err =>{
            console.log('Error from ShowBlogList: '+err.message);
          })
      };
      render() {
        const blogs = this.state.blogs;
        console.log("Blog details : " + blogs);
        let blogList;
    
        if(!blogs) {
          blogList = "there is no book record!";
        } else {
          blogList = blogs.map((blog, k) =>
            <BlogCard blog={blog} key={k}/>
          );
        }
      return(
        <>
        <div className="container_blogs">
            <h1 className="heading_blogs">Discover my blogs</h1>
            <Link to="/newblog"><button className="button_for_newblog">Add new blog +</button></Link>
        </div>
        <div className="container2_blogs">
            {blogList}
        </div>
        </>
      );
      }
}
export default Blogs;

    // const [blogs_data, setBlogs_data] = useState({blogs:[]});
    // function getBlogPost(){
    //     axios.get('/api/blogs')
    //     .then((response)=>{
    //         const data=response.data;
    //         setBlogs_data({...blogs_data,blogs:data});
    //         console.log('Data has been received!!');
    //         console.log(blogs_data.blogs);
    //     })
    //     .catch(()=>{
    //         console.log("Error retrieving data!!");
    //     });
    // }
    // getBlogPost();
    // let posts=blogs_data.blogs;
    // if(!posts.length) return null;

    // let blogList =  Object.keys(posts).map((blog, k) =>
    // <BlogCard title={blog.title} desc={blog.blog_desc} index={k}/>
    // );

    // const blogs = blogs_data;
    // console.log("PrintBlog: " + blogs);
    // let blogList;

    // if (!blogs) {
    //     blogList = "there is no blog record!";
    // } else {
        // blogList =  Object.keys(blogs).map((blog, k) =>
        //     <BlogCard blog={blog} key={k} />
        // );
    // }


    // return (
        // <>
        //     <div className="container_blogs">
        //         <h1 className="heading_blogs">Discover my blogs</h1>
        //         <Link to="/newblog"><button className="button_for_newblog">Add new blog +</button></Link>
        //     </div>
        //     <div className="container2_blogs">
        //         {blogList}
        //     </div>
        // </>
    // )

