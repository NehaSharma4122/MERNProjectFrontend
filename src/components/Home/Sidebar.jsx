import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link:"/importantTasks",
    },
    {
      title: "Completed tasks",
      icon: <FaCheckDouble />,
      link:"/completedTasks",

    },
    {
      title: "Incompleted tasks",
      icon: <TbNotebookOff />,
      link:"/incompletedTasks",

    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">The Code Master</h2>
        <h4 className="mb-1 text-gray-400">tcm@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300">
            {items.icon}&nbsp;&nbsp;{items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-500 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
