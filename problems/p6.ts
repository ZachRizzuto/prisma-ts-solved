import { prisma } from "./prisma";

// find all movies that a user has watched
export const findAllMoviesThatAUserWatched = async (userId: number) => {
  const movies = await prisma.starRating.findMany({
    include: {
      movie: true,
    },
    where: {
      userId: {
        equals: userId,
      },
    },
  });

  return movies.map((movie) => movie.movie);
};
