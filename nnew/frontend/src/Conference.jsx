import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Conference = () => {
  const [conferences, setConferences] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/api";

  useEffect(() => {
    axios
      .get(`${API_URL}/conferences`)
      .then((result) => {
        setConferences(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [title]);

  const addConference = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/conferences`, {
        title,
        location,
        date,
        description,
      });
      setConferences([...conferences, response.data]);
      setTitle("");
      setLocation("");
      setDate("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-black bg-gray-300 py-6 text-center">
          Conference Management App
        </h1>

        <form onSubmit={addConference} className="px-10 py-6">
          <h2 className="text-2xl py-4 font-bold text-black text-center">
            Add Conference
          </h2>
          <div className="flex gap-2 items-center justify-center ">
            <input
              className="px-6 py-2 border border-black rounded-lg"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="px-6 py-2 border border-black rounded-lg"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="px-6 py-2 border border-black rounded-lg"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="px-6 py-2 border border-black rounded-lg"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center py-4">
            <button
              className="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg"
              type="submit"
            >
              {" "}
              Add Conference
            </button>
          </div>
        </form>

        <h2 className="text-2xl py-4 font-bold text-black text-center">
          Available Conferences
        </h2>
        <ul className="px-10 py-6">
          {conferences.map((conference) => (
            <li
              className="p-4 flex justify-center items-center gap-4 border-b border-black"
              key={conference._id}
            >
              <h3 className="text-xl font-semibold">{conference.title}</h3>
              <p>{conference.description}</p>
              <p>Location: {conference.location}</p>
              <p>Date: {new Date(conference.date).toDateString()}</p>
              <div className="flex items-center justify-center py-4">
                <button
                  onClick={() => navigate(`/conference/${conference._id}`)}
                  className="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg"
                  type="submit"
                >
                  {" "}
                  Add Feedback
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Conference;
