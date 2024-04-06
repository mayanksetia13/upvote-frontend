import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import { backend } from "./utils/helper";

const socket = io(backend);

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Main socket={socket} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
