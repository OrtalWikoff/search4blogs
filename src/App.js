import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";


function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
