import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = prisma.user.upsert({
    where: {},
    update: {},
    create: {
      firstName: 'Omar',
      lastName: 'Harras',
      email: 'oh@test.com',
      Profile: {
        create: [
          {
            type: 'CLAIMANT',
          },
          {
            type: 'PROVIDER',
          },
        ],
      },
    },
  });

  console.log({ user1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
