import React from "react";
import { Card } from "@/components";
import {getCurrentUser} from "@/lib/auth/actions";
import { getAllProducts } from "@/lib/actions/product";

const Home = async () => {
  const user = await getCurrentUser();
  const { products } = await getAllProducts({
    page: 1,
    limit: 4,
    sort: "newest",
    search: "",
    genderSlugs: [],
    brandSlugs: [],
    categorySlugs: [],
    sizeSlugs: [],
    colorSlugs: [],
    priceRanges: []
  });

  console.log('USER:', user);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.name}
              subtitle={p.subtitle ?? undefined}
              imageSrc={p.imageUrl ?? "/shoes/shoe-1.jpg"}
              price={p.minPrice !== null ? p.minPrice : undefined}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
