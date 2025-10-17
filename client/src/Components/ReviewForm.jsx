import "./ReviewForm.css";

export function ReviewForm() {
  return (
    <div>
      <form action="" className="review-form">
        This is the Form Component
        <label htmlFor="">Album Name:</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
