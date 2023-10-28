import { prisma } from "./prisma";

// get All Pg-13 movies, ordered by release year descending
export const getAllPG13Movies = async () => {
  return prisma.movie.findMany({
    orderBy: { releaseYear: "desc" },
    where: {
      parentalRating: {
        equals: "PG-13",
      },
    },
    select: {
      parentalRating: true,
      releaseYear: true,
    },
  });
};
