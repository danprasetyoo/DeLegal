import prisma from './index';

export const getConsultationsByUser = async (userId: number) => {
  return await prisma.consultation.findMany({
    where: { userId },
    include: { reviewedBy: true },
  });
};
