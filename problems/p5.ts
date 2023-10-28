// import { groupBy, map, reduce, sumBy } from "remeda";
import { prisma } from "./prisma";
// import { StarRating } from "@prisma/client";

// hint:find all stars with the movies "included" on, then good ol' javascript should finish the job
// This one should require more javascript work than the previous ones
export const getAllMoviesWithAverageScoreOverN = async (n: number) => {
  return prisma.starRating
    .findMany({
      include: {
        movie: true,
      },
    })
    .then((ratings) => {
      const movieRatings = new Map<
        string,
        { totalScore: number; count: number }
      >();

      ratings.forEach((rating) => {
        const movieId = rating.movie.id;
        const score = rating.score;

        if (!movieRatings.has(`${movieId}`)) {
          movieRatings.set(`${movieId}`, { totalScore: score, count: 1 });
        } else {
          const existingRating = movieRatings.get(`${movieId}`);
          if (existingRating) {
            existingRating.totalScore += score;
            existingRating.count++;
          }
        }
      });

      const moviesWithAverageScore = [];

      for (const [movieId, { totalScore, count }] of movieRatings.entries()) {
        const averageScore = totalScore / count;

        if (averageScore > n) {
          const movie = ratings.find(
            (rating) => rating.movie.id === parseInt(movieId)
          )?.movie;
          moviesWithAverageScore.push(movie);
        }
      }

      return moviesWithAverageScore;
    });
};
