import { prisma } from "./prisma";

// get average score for a user
export const getAverageScoreForUser = async (userId: number) => {
  const scores = await prisma.starRating.aggregate({
    where: {
      userId: {
        equals: userId,
      },
    },
    _avg: {
      score: true,
    },
  });

  return scores._avg.score;
};
