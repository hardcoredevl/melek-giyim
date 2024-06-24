import { NavLink } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
import products from "../../constant/products.json";
import { useState } from "react";
import SearchList from "../search-list/SearchList";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [product, setProduct] = useState(null);
  const val = useSelector((state) => state.basket.count);

  const searchProduct = (event) => {
    if (event.target.value.length > 0) {
      const searchValue = event.target.value.toLowerCase();
      let product = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue)
      );
      setProduct(product);
      setSearch(true);
    } else {
      setSearch(false);
    }
    document.querySelector(".search-list").classList.remove("hidden");
  };

  return (
    <header className="p-4 bg-orange-500 text-white flex flex-col sm:flex-row justify-between items-center ">
      <div className="mb-2 sm:mb-0">
        <a href="/" className="text-4xl font-semibold">
          Melek İç Giyim
        </a>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/4 bg-white rounded-md relative">
        <input
          type="search"
          className="p-3 rounded-md w-full outline-none border-none text-gray-600 placeholder:text-gray-400"
          placeholder="Ürün ara.."
          onChange={searchProduct}
        />
        <CiSearch
          size={50}
          className="text-orange-500 cursor-pointer hover:text-orange-300 transition-colors border-l border-orange-300 p-2 "
        />
        {search && <SearchList product={product} />}
      </div>
      <div className="flex justify-center items-center mt-4 sm:mt-0 flex-col w-full sm:flex-row sm:w-auto">
        <NavLink
          className="p-2 rounded-md w-full text-center sm:w-auto"
          to={"/"}
        >
          Ana Sayfa
        </NavLink>
        <a
          className="p-2 rounded-md w-full text-center sm:w-auto"
          href="https://www.google.com/maps/dir//google+maps+melek+i%C3%A7+giyim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa538424c125d:0xe916016e09d5f21a?sa=X&ved=1t:3061&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yol Tarifi
        </a>
        <a
          className="p-2 rounded-md w-full text-center sm:w-auto"
          href="https://www.google.com/maps/dir//google+maps+melek+i%C3%A7+giyim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa538424c125d:0xe916016e09d5f21a?sa=X&ved=1t:3061&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bize Ulaş
        </a>

        <NavLink
          className="p-2 mx-10 rounded-md flex justify-center items-center gap-1 border w-full text-center sm:w-auto"
          to={"/sepet"}
        >
          <span className="">Sepetim: {val}</span>
          <BsFillBasket3Fill />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
