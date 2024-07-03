//useNavigate is used in inside components and Navigate is used for Routing purpose

//Outlet is used for accessing nested routes
import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  //define the useNavigate and return the naviage where you want to return
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("--------");
    //we can use navigate option or return navigate both will work
    // navigate("/")
    return navigate("/products");
  };
  return (
    <main>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Back to Home</button>
      <Outlet />
    </main>
  );
};
