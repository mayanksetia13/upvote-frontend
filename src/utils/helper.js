import { toast } from "react-toastify";
export const backend = "http://localhost:5000";
export const getAllQuestions = "http://localhost:5000/api/question/";
export const postQuestion = "http://localhost:5000/api/question/new-question";
export const upvoteQuestion = "http://localhost:5000/api/question/upvote";
export const toastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  icon: false,
  hideProgressBar: true,
  closeOnClick: true,
  className: "bg-accent text-white",
};
