import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AiFillStar } from "react-icons/ai";

const AppDetails = () => {
  const app = useLoaderData();

  
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  useEffect(() => {
    if (app?.reviews) {
      setReviews(app.reviews);
    }
  }, [app]);

  if (!app) {
    return <p>Loading...</p>;
  }

  const handleSubmitReview = () => {
    if (!reviewText || reviewRating < 1 || reviewRating > 5) {
      alert("Please enter a valid review and rating (1-5).");
      return;
    }

    const newReview = {
      user: "new_user",
      rating: reviewRating,
      comment: reviewText,
    };

    setReviews([...reviews, newReview]);
    setReviewText("");
    setReviewRating(5);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-blue-950 font-bold text-center mt-4">
        {app.name}
      </h1>
      <div className="max-w-11/12 mx-auto p-10 my-10">
      
      <img
        src={app.banner}
        alt={app.name}
        className="w-full md:h-150 object-cover rounded-xl mb-6"
      />

      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-40 h-40 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-950">{app.name}</h2>
          <p className="text-blue-700 mb-2">By {app.developer}</p>
          <p className="mb-1">Category: {app.category}</p>
          <p className="mb-1">
            Downloads: {app?.downloads?.toLocaleString() || 0}
          </p>
          <div className="flex items-center text-yellow-500 font-medium mb-2">
            <AiFillStar className="mr-1" /> {app.rating}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Install
          </button>
        </div>
      </div>

      
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2 text-blue-950">
          Description
        </h3>
        <p className="text-blue-900">{app.description}</p>
      </div>

      
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2 text-blue-950">Features</h3>
        <ul className="list-disc pl-6 text-blue-900">
          {Array.isArray(app.features) && app.features.length > 0 ? (
            app.features.map((feature, idx) => <li key={idx}>{feature}</li>)
          ) : (
            <li>No features listed.</li>
          )}
        </ul>
      </div>

      
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2 text-blue-950">Reviews</h3>
        {reviews.map((review, idx) => (
          <div key={idx} className="border p-4 rounded-lg mb-3 bg-white">
            <p className="font-medium">{review.user}</p>
            <div className="flex items-center text-yellow-500 mb-1">
              <AiFillStar className="mr-1" /> {review.rating}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2 text-blue-950">
          Submit Your Review
        </h3>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          className="w-full border rounded p-2 mb-4"
          rows="4"
        ></textarea>
        <div className="mb-4">
          <label className="mr-2 font-medium">Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={reviewRating}
            onChange={(e) => setReviewRating(Number(e.target.value))}
            className="border p-1 rounded w-16"
          />
        </div>
        <button
          onClick={handleSubmitReview}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    </div>
    </div>
  );
};

export default AppDetails;
