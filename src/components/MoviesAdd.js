import React, { useState } from "react";
import Modal from "react-modal";

import Rate from "./Rate";

Modal.setAppElement("#root");

const MoviesAdd = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      name,
      date,
      rating,
      image,
      type,
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setName("");
    setDate("");
    setRating("");
    setImage("");
    setType("");
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          style={{ backgroundColor: "white" }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
              <Rate rating={rating} setRatingSearch={setRating} />
            </div>
            {
              <input
                type="number"
                name="rating"
                value={rating}
                required
                onChange={(e) => setRating(e.target.value)}
              />
            }
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            />
            <label>Movie Summary</label>
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default MoviesAdd;
