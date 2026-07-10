import { Product } from "@/schemas/productSchema";

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({
  products,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <p className="
        text-center
        text-gray-500
        py-6
        text-sm
        sm:text-base
      ">
        No products found.
      </p>
    );
  }

  return (
    <div className="
      w-full
      overflow-x-auto
      rounded-lg
      border
      border-gray-300
    ">
      <table className="
        w-full
        min-w-150
        border-collapse
        text-sm
        sm:text-base
      ">

        <thead>
          <tr className="bg-gray-100">
            <th className="
              border
              p-2
              sm:p-3
              text-left
            ">
              ID
            </th>

            <th className="
              border
              p-2
              sm:p-3
              text-left
            ">
              Name
            </th>

            <th className="
              border
              p-2
              sm:p-3
              text-left
            ">
              Status
            </th>

            <th className="
              border
              p-2
              sm:p-3
              text-left
            ">
              Created At
            </th>
          </tr>
        </thead>


        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-50"
            >
              <td className="
                border
                p-2
                sm:p-3
              ">
                {product.id}
              </td>

              <td className="
                border
                p-2
                sm:p-3
              ">
                {product.name}
              </td>

              <td className="
                border
                p-2
                sm:p-3
              ">
                {product.status}
              </td>

              <td className="
                border
                p-2
                sm:p-3
                whitespace-nowrap
              ">
                {product.createdAt.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}