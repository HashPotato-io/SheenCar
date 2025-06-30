import React, { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

interface ReviewBreakdown {
  stars: number;
  count: number;
}

interface ReviewSectionProps {
  rating: number;
  reviewCount: number;
  reviewsBreakdown: ReviewBreakdown[];
  reviews: Review[];
  onPostReview?: (rating: number, text: string) => void;
}

export default function ReviewSection({
  rating = 4.0,
  reviewCount = 52,
  reviewsBreakdown = [
    { stars: 5, count: 30 },
    { stars: 4, count: 15 },
    { stars: 3, count: 5 },
    { stars: 2, count: 1 },
    { stars: 1, count: 1 }
  ],
  reviews = [
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "6 hours ago",
      content: "The service at Prestige Auto was outstanding! They were incredibly professional and always on time. I can't wait to return for my next vehicle purchase."
    },
    {
      id: 2,
      author: "Emily Davis",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      date: "2 days ago",
      content: "I was thoroughly impressed with the quality of service at Prestige Auto. They were attentive and respectful, making the car buying experience smooth and enjoyable."
    }
  ],
  onPostReview,
}: ReviewSectionProps) {
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const handlePostReview = () => {
    if (onPostReview && reviewRating > 0) {
      onPostReview(reviewRating, reviewText);
      setReviewRating(0);
      setReviewText("");
    }
  };

  const handleCancel = () => {
    setReviewRating(0);
    setReviewText("");
  };

  return (
    <div className="py-20 px-10 bg-white">
      <h2 className="text-2xl font-semibold lg:text-[40px] mb-4 text-gray-900">Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 shadow-xl py-4 px-6 rounded-md gap-12 mb-12">
        {/* Left side - Rating breakdown */}
        <div className="order-2 lg:order-1 space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => {
            const breakdown = reviewsBreakdown.find(b => b.stars === stars) || { stars, count: 0 };
            const percentage = reviewCount > 0 ? (breakdown.count / reviewCount) * 100 : 0;

            return (
              <div key={stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-8">
                  <span className="text-sm text-gray-600">{stars}</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-800 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right side - Overall rating */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
          <div className="text-5xl font-bold text-gray-900 mb-2">
            {rating.toFixed(1)}
          </div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating)
                    ? "fill-amber-400 text-amber-400"
                    : i < rating
                    ? "fill-amber-400 text-amber-400 opacity-50"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {reviewCount} Reviews
          </div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6 mb-12">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">{review.author}</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              {review.content}
            </p>
            <div className="text-sm text-gray-500">{review.date}</div>
          </div>
        ))}
      </div>

      {/* Write a Review section */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Write a Review</h3>
        
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            alt="John Doe"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="font-medium text-gray-900">John Doe</span>
        </div>

        <div className="mb-6">
          <div className="text-sm text-gray-700 mb-3">Rating:</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  star <= reviewRating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200 hover:fill-amber-200 hover:text-amber-200"
                }`}
                onClick={() => setReviewRating(star)}
              />
            ))}
          </div>
        </div>

        <textarea
          placeholder="Tell us more about your experience!"
          className="w-full border border-gray-300 rounded-lg p-4 mb-6 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePostReview}
            disabled={reviewRating === 0}
            className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}