import { PrismaClient } from "@prisma/client";
import CategoriesList from "../_components/categories-list";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const prisma = new PrismaClient();
  const limit = await prisma.category.count();

  const categories = await prisma.category.findMany({
    skip: Number(searchParams.from ?? 0),
    take: 6,
    select: {
      id: true,
      name: true,
    },
  });

  return (
    <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-start pb-10 pt-10 text-black max-md:px-4">
      <div className="w-11/12 rounded-lg border border-gray-300 p-6 text-center md:w-[30rem] md:p-8 lg:p-8 2xl:p-10">
        <h1 className="text-3xl font-semibold">Please mark your interests!</h1>

        <p className="py-8 text-base font-normal">We will keep you notified.</p>

        <h3 className="pb-2 text-start text-lg font-medium md:text-xl">
          My saved interests!
        </h3>

        <CategoriesList
          categories={categories}
          from={Number(searchParams.from ?? 0)}
          to={6}
          limit={limit}
        />
        <hr className="mb-6 mt-4 border-gray-300" />
      </div>
    </main>
  );
}
