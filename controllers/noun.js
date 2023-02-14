import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNewNoun = async (req, res) => {
  try {
    const auth_id = req.params.id;
    const data = req.body;
    const createdNoun = await prisma.noun.create({
      data: {
        user: {
          connect: {
            auth0ID: auth_id,
          },
        },
        ...data,
      },
    });

    res.status(200).json({ data: createdNoun });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const getAllNounsById = async (req, res) => {
  try {
    const auth_id = req.params.id;

    const nouns = await prisma.noun.findMany({
      where: {
        user: {
          auth0ID: {
            equals: auth_id,
          },
        },
      },
    });

    res.status(200).json({ data: nouns });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const updateNounById = async (req, res) => {
  const bodyData = req.body;
  const nounId = req.body.id;

  try {
    const updatedNoun = await prisma.noun.update({
      where: { id: nounId },
      data: bodyData,
    });

    res.status(200).json({ data: updatedNoun });
  } catch (err) {
    console.error(err);
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

export const deleteNounById = async (req, res) => {
  const nounId = req.body.id;

  const deletedNoun = await prisma.noun.delete({
    where: {
      id: nounId,
    },
  });

  res.status(200).json({
    success: true,
    data: deletedNoun,
  });
};

export const getAllNounsByCategory = async (req, res) => {
  const auth0ID = req.params.id;
  const category = req.body.category;

  try {
    const nouns = await prisma.noun.findMany({
      where: {
        AND: [
          {
            category: category,
          },
          {
            auth0: auth0ID,
          },
        ],
      },
    });

    res.status(200).json({ data: nouns });
  } catch (err) {
    console.error(err);
    res.status(404).json({ status: 'fail', message: err.message });
  }
};
