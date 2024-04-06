import { useState } from "react";
import { postQuestion } from "../utils/helper";
import { toast } from "react-toastify";
import { toastOptions } from "../utils/helper";

function Form() {
  const [name, setName] = useState();
  const [questionText, setQuestionText] = useState();

  const formHandler = (e) => {
    e.preventDefault();
    const entry = {
      name,
      question: questionText,
    };
    askQuestion(entry);
  };

  const clearFormValues = () => {
    setName("");
    setQuestionText("");
  };

  const askQuestion = async (entry) => {
    const res = await fetch(postQuestion, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const data = await res.json();
    toast.success(data.message, toastOptions);
    clearFormValues();
    console.log(data);
  };

  return (
    <>
      <form className="min-h-screen" onSubmit={formHandler}>
        <label className="form-control py-3 my-2 w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
            {/* <span className="label-text-alt">Top Right label</span> */}
          </div>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </div> */}
        </label>
        <label className="form-control py-3 my-2">
          <div className="label">
            <span className="label-text">Question</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Ask your Question here..."
            value={questionText}
            onChange={(e) => {
              setQuestionText(e.target.value);
            }}
          ></textarea>
          {/* <div className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </div> */}
        </label>
        <label className="form-control py-3 my-2 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter the Magic Code</span>
            {/* <span className="label-text-alt">Top Right label</span> */}
          </div>
          <input
            type="text"
            placeholder="ADJ473"
            className="input input-bordered w-full max-w-xs"
          />
          {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </div> */}
        </label>
        <button className="btn btn-accent mt-3 py-2 px-8">
          Submit your Question
        </button>
      </form>
    </>
  );
}

export default Form;
