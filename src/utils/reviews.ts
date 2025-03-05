import { CameraReview } from '../types/cameras';

export function getSortedReviews(comments: CameraReview[], maxLength: number): CameraReview[]{
  const sortedReviews = [...comments].sort((reviewA, reviewB) => {
    const commentADate = new Date(reviewA.createAt).getTime();
    const commentBDate = new Date(reviewB.createAt).getTime();
    return commentBDate - commentADate;
  });
  return sortedReviews.length >= maxLength
    ? sortedReviews.slice(0, maxLength)
    : sortedReviews;
}
