import QuestionsPage from "../components/QuestionsPage";
import Sidebar from "../components/sidebar";

function Main({ socket }) {
  return (
    <div className="flex min-h-screen">
      <QuestionsPage socket={socket} />
      <Sidebar />
    </div>
  );
}

export default Main;
