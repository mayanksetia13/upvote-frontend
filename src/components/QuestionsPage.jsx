/* eslint-disable react/prop-types */
import UpvoteLogo from "../assets/svgComponents/bxs-upvote.svg?react";
import { useState, useEffect } from "react";
import { getAllQuestions, upvoteQuestion } from "../utils/helper";

function QuestionsPage({ socket }) {
  const [questionsList, setQuestionsList] = useState([]);

  const fetchQuestions = async () => {
    const res = await fetch(getAllQuestions);
    const data = await res.json();
    console.log(data);
    setQuestionsList(data);
  };

  const upvoteHandler = async (id) => {
    const res = await fetch(upvoteQuestion + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    socket.on("newQuestion", () => {
      fetchQuestions();
    });

    socket.on("upvote", ({ id, upvote }) => {
      setQuestionsList((prevQuestions) => {
        return prevQuestions.map((question) =>
          question._id === id ? { ...question, upvote } : question
        );
      });
      fetchQuestions();
    });
    return () => {
      // Clean up socket connection when component unmounts
      socket.off("upvote");
    };
  }, []);

  return (
    <div className="w-8/12 bg-slate-200">
      <h1 className="text-accent font-bold text-3xl py-3 pl-3 fontd uppercase">
        Make it easy for Harkirat
      </h1>
      <div className="w-11/12 mx-auto border">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-primary text-lg">
              <tr>
                <th></th>
                <th className="w-2/3">Question</th>
                <th className="w-1/4">Name</th>
                <th className="w-2/5">Upvote</th>
              </tr>
            </thead>
            <tbody className="text-neutral">
              {questionsList.map((entry, index) => {
                return (
                  <tr key={entry._id} className="h-full">
                    <th>{index + 1}</th>
                    <td className="w-2/3 fontd font-normal text-lg">
                      {entry.question}
                    </td>
                    <td className="w-1/4">{entry.name}</td>
                    <td className="w-full flex justify-center align-center">
                      <div className="stat-value text-secondary text-[1.5rem] w-full">
                        {entry.upvote}
                      </div>
                      <div className="flex items-center justify-center">
                        <UpvoteLogo
                          className="cursor-pointer hover:bg-primary rounded-lg"
                          onClick={() => {
                            upvoteHandler(entry._id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default QuestionsPage;
