import { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ul/button/Button";
import { txtSlicer } from "./utils/function";

interface IProps {
  product: IProduct;
}

function ProductCard({ product }: IProps) {
  return (
    <div className=" max-w-sm md:max-w-lg mx-auto mx-0  border rounded-lg p-4 shadow-md bg-white flex flex-col">
      {/* Product Image */}
      <Image
        url={product.imageURL} // Using product's actual image
        alt={product.title}
        className="rounded-md mb-5"
      />

      {/* Product Title & Description */}
      <h3 className="text-xl font-semibold mt-3">{product.category.name}</h3>
      <p className="text-gray-600 mt-1 text-sm">{txtSlicer(product.description)}</p>

      {/* Color Selection */}
      <div className="flex items-center my-4 space-x-2">
        {product.colors.map((color) => (
          <span
            key={color}
            className="rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Price & Brand Image */}
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
        <span className="text-lg font-bold text-gray-800">${product.price}</span>
        <Image
          url={product.category.imageURL} // Using category image dynamically
          alt={product.category.name}
          className="rounded-full w-10 h-10 border object-contain"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <Button className="bg-red-600 w-full hover:bg-red-700 transition">
          Submit
        </Button>
        <Button
          className="bg-green-600 w-full hover:bg-green-700 transition"
          onClick={() => console.log("Edit clicked")}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
