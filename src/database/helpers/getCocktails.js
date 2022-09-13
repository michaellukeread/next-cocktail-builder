import { PrismaClient } from "@prisma/client"

import { flattenToIds } from "database/utils"

const prisma = new PrismaClient()

const getCocktails = async (userId) => {
  try {
    const cocktails = await prisma.cocktail.findMany({
      where: { userId },
      select: {
        cocktailId: true,
      },
    })

    return flattenToIds(cocktails)
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export default getCocktails
