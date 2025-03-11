import prisma from './index';

export const getCommentsByDocumentId = async (documentId: number) => {
  return await prisma.comment.findMany({
    where: { documentId },
    include: { user: true },
  });
};
