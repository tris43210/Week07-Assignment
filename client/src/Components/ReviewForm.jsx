import "./ReviewForm.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function ReviewForm() {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch("http://localhost:8081/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review: formValues.review, albumid: Number(id) }),
    });

    setFormValues({}); 
  }

  useEffect(function() {
    
  }, [])

  return (
    <div>
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="userReview">Leave a Review: </label>

        <input
          type="text"
          onChange={handleChange}
          name="review"
          id="userReview"
          placeholder="Leave a Review"
          value={formValues.review || ""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
