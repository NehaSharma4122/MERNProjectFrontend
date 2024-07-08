import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch,useSelector} from "react-redux";
const Login = () => {
  
  const [data, setdata] = useState({ username: "",  password: "" });
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn =useSelector((state)=>state.auth.isLoggedIn);

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
    
          const response = await axios.post("https://task-manager-backend-virid.vercel.app/api/v1/log-in", 
        data
      );
      setdata({username: "", password: "" })
     
      localStorage.setItem("id",response.data.id);
      localStorage.setItem("token",response.data.token);
      dispatch(authActions.login());
      history("/")
    }
    }catch(error){
     
      alert(error.response.data.message)
    }
  };
        
  
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-4xl font-semibold my-2">Log In</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="username" 
          onChange={handleChange}
          value={data.username}
        
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="password" 
          onChange={handleChange}
          value={data.password}
          
        />
        <div className="w-full flex items-center justify-between">
        <button className="bg-blue-600 text-l px-3 py-2 my-3 rounded" onClick={handleSubmit }>
          Login
        </button>
        <Link to="/signup" className="text-gray-400 hover:text-gray-200">Not having an account? SignUp here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
