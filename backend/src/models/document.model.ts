import prisma from './index';

export const getAllDocuments = async () => {
  return await prisma.legalDocument.findMany({
    include: { category: true, uploadedBy: true, tags: true },
  });
};

export const createDocument = async (data: any) => {
  return await prisma.legalDocument.create({ data });
};
