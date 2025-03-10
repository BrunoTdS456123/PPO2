import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  const user1 = await prisma.user.create({
    data: {
      nome: "vasco",
      email: "dagama@gmail.com",
      nickname: "vascao",
      senha: "1234"
    }
  });
  console.log(user1);
})();
