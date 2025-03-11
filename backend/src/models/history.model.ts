import prisma from './index';

export const getDocumentHistory = async (documentId: number) => {
  return await prisma.documentHistory.findMany({
    where: { documentId },
    include: { updatedBy: true },
  });
};
