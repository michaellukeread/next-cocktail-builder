import { PrismaClient } from "@prisma/client"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "pages/api/auth/[...nextauth]"

const prisma = new PrismaClient()

const addCocktailToUser = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const body = JSON.parse(req.body)

  try {
    const user = await prisma.user.findFirst({
      where: { email: { equals: session.user.email } },
    })

    const createCocktail = await prisma.cocktail.create({
      data: {
        cocktailId: body.id,
        userId: user.id,
      },
    })

    return res.status(200).json(createCocktail)
  } catch {
    res.status(500).json({ error: "Error adding cocktail to user" })
  }
}

export default addCocktailToUser
