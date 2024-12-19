import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const FeedBack = () => {
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const API_URL = "http://localhost:3000/api";

  const addFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/feedback`, {
        username,
        feedback,
        conferenceId: id,
        userId: id,
      });
      console.log(response.data);
      setUsername("");
      setFeedback("");
    } catch (error) {
      console.log(error);
    }
  };

  const getFeedbacks = async () => {
    const response = await axios.get(`${API_URL}/feedback/${id}`);
    setFeedbacks(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div>
      <form onSubmit={addFeedback} className="px-10 py-6">
        <h2 className="text-2xl py-4 font-bold text-black text-center">
          Add FeedBack
        </h2>
        <div className="flex gap-2 items-center justify-center ">
          <input
            className="px-6 py-2 border border-black rounded-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="px-6 py-2 border border-black rounded-lg"
            type="text"
            placeholder="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center py-4">
          <button
            onClick={() => navigate("/conference")}
            className="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg"
            type="submit"
          >
            {" "}
            Add Feedback
          </button>
        </div>
      </form>
      <div>
        <h2 className="text-2xl py-4 font-bold text-black text-center">
          Available Feedbacks
        </h2>
        <ul className="px-10 py-6">
          {feedbacks.map((feedback) => (
            <li
              className="p-4 flex justify-center items-center gap-4 border-b border-black"
              key={feedback._id}
            >
              <h3 className="text-xl font-semibold">{feedback.feedback}</h3>
              <p>Username: {feedback.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
