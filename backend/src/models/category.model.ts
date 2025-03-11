import prisma from './index';

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};
