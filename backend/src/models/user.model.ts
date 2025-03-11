import prisma from './index';

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: any) => {
  return await prisma.user.create({ data });
};
