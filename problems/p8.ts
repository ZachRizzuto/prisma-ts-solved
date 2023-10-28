// import { maxBy, minBy } from "remeda";
import { prisma } from "./prisma";

function minBy<T, R>(
  array: T[],
  cb: (item: T | undefined) => R | undefined | null
): T | undefined {
  let returnValueMin: T | undefined;
  let min: R | undefined | null = undefined;

  if (array.length > 0) {
    min = cb(array[0]);

    for (const i of array) {
      const result = cb(i);

      if (result !== undefined && result !== null) {
        if (min === undefined || min === null || result < min) {
          min = result;
          returnValueMin = i;
        }
      }
    }
  } else {
    return undefined;
  }

  return returnValueMin;
}

function maxBy<T, R>(
  array: T[],
  cb: (item: T | undefined) => R | undefined | null
): T | undefined {
  let returnValueMin: T | undefined;
  let max: R | undefined | null = undefined;

  if (array.length > 0) {
    max = cb(array[0]);

    for (const i of array) {
      const result = cb(i);

      if (result !== undefined && result !== null) {
        if (max === undefined || max === null || result > max) {
          max = result;
          returnValueMin = i;
        }
      }
    }
  } else {
    return undefined;
  }

  return returnValueMin;
}

// Always tell truths, don't you ever lie, to solve this problem, just try a `groupBy`

// find the critic with the lowest average score
export const findTheGrumpiestCriticId = async () => {
  const averageScores = await prisma.starRating.groupBy({
    by: ["userId"],
    _avg: {
      score: true,
    },
  });

  return minBy(averageScores, (result) => result?._avg.score)?.userId;
};

// find the critic with the highest average score
export const findTheNicestCriticId = async () => {
  const averageScores = await prisma.starRating.groupBy({
    by: ["userId"],
    _avg: {
      score: true,
    },
  });

  return maxBy(averageScores, (result) => result?._avg.score)?.userId;
};
