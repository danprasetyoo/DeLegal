import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await prisma.legalDocument.findMany();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
};

export const createDocument = async (req: Request, res: Response) => {
  try {
    const { title, description, categoryId, fileUrl } = req.body;
    const userId = (req as any).user?.id; // Pastikan user sudah di-authenticate

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const document = await prisma.legalDocument.create({
      data: { title, description, categoryId, uploadedById: userId, fileUrl },
    });

    res.status(201).json({ message: 'Dokumen berhasil diunggah', document });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
};

export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.legalDocument.delete({ where: { id: Number(id) } });
    res.json({ message: 'Dokumen berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
};
