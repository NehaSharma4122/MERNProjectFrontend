import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useSelector} from "react-redux";

const Signup = () => {
  const history = useNavigate();
  const isLoggedIn =useSelector((state)=>state.auth.isLoggedIn);
  const [data, setdata] = useState({ username: "", email: "", password: "" });

  if(isLoggedIn===true){
    history("/")
  }
 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try{
      if (data.username === "" || data.email === "" || data.password === "") {
        alert("All fields are required");
      }else {
    
          const response = await axios.post("https://task-manager-backend-virid.vercel.app/api/v1/sign-in", 
        data
      );
      setdata({username: "", email: "", password: "" })
      alert(response.data.message);
      history("/login")
      }
    }catch(error){
     
      alert(error.response.data.message)
    }
  };
        
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-3/6 rounded bg-gray-800">
        <div className="text-4xl font-semibold my-2">Sign up</div>
        <input
          type="text"
          placeholder="username"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="xyz@example.com"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-red-600 text-l px-3 py-2 my-3 rounded" onClick={handleSubmit}>
            Create Account
          </button>
          <Link to="/login" className="text-gray-400 hover:text-gray-200">
            Already have an account? LogIn here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
