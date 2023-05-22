import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from '../../servise/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMoviesReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && !isLoading && reviews.length === 0 && (
        <h2 style={{ textAlign: 'center' }}>
          Try again. Something went wrong!
        </h2>
      )}{' '}
      {!error && !isLoading && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any reviews for this movie</h2>
      )}
    </>
  );
};
export default Reviews;
