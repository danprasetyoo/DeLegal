import prisma from './index';

export const getRequestsByUser = async (userId: number) => {
  return await prisma.request.findMany({
    where: { userId },
    include: { reviewedBy: true },
  });
};
