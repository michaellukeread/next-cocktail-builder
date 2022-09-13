import { unstable_getServerSession } from "next-auth"
import { PrismaClient } from "@prisma/client"

import { authOptions } from "pages/api/auth/[...nextauth]"

const prisma = new PrismaClient()

const getUserId = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  try {
    const user = await prisma.user.findFirst({
      where: { email: { equals: session.user.email } },
    })

    return user.id
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export default getUserId
