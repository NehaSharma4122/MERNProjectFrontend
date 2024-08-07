import React,{useEffect,useState  } from "react";
import axios from "axios";
import Cards from "../components/Home/Cards";

const IncompletedTasks = () => {
 
    const [Data,setData] = useState();
    const headers = {
      id:localStorage.getItem("id"),
      authorization:`Bearer ${localStorage.getItem("token")}`,
    };
    useEffect(()=>{
      const fetch = async () => {
        const response = await axios.get(
          "https://task-manager-backend-virid.vercel.app/api/v2/get-incomplete-tasks",
        {headers}
      );
    setData(response.data.data);
  };
    fetch();
  });
  return (
    <div>
      <Cards home={"false"}  data={Data}/>
    </div>
  );
};

export default IncompletedTasks;
