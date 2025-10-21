import "./ReviewForm.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function ReviewForm() {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({});
  const [reviews, setReviews] = useState([])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch("https://week07-assignment-server-afhz.onrender.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review: formValues.review, albumid: Number(id) }),
    });

    setFormValues({}); 
  }

useEffect(function () {
  async function getReviews() {
    const response = await fetch(`https://week07-assignment-server-afhz.onrender.com/reviews?albumid=${id}`);
    const data = await response.json();
    setReviews(data);
  }

  getReviews();
  
  const pollingReviews = setInterval(function () {
    getReviews();
  }, 5000);

  return function () {
    clearInterval(pollingReviews);
  };
}, [id]);

  console.log(reviews); 

  return (
    <>
      <div className="review-container">
        {reviews.map(function(item) {
          return(
              <p>{item.review}</p>
          )
        })}
      </div>
      <div className="form-container">

        <form className="review-form" onSubmit={handleSubmit}>
          <label htmlFor="userReview" className="font-bold">Leave a Review: </label>
          <input
            type="text"
            onChange={handleChange}
            name="review"
            id="userReview"
            placeholder="Leave a Review"
            value={formValues.review || ""}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
