import prisma from './index';

export const getAllTags = async () => {
  return await prisma.tag.findMany();
};
