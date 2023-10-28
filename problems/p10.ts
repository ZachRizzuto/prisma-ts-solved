import { prisma } from "./prisma";

// Deleting a thing, only works swell, if things that reference it are deleted as well
export const deleteAllUsersWithAgeUnderN = async (n: number) => {
  const users = await prisma.user.findMany({
    where: {
      age: {
        lt: n,
      },
    },
  });

  const userIds = users.map((user) => user.id);

  for (const id of userIds) {
    await prisma.starRating.deleteMany({
      where: {
        userId: id,
      },
    });
  }

  return prisma.user.deleteMany({
    where: {
      age: {
        lt: n,
      },
    },
  });
};
