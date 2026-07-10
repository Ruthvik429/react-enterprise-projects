import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { getProducts, getCategories } from "../api/productApi";
import ProductGrid from "../components/product/ProductGrid";

const PRODUCTS_PER_PAGE = 8;

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  // Load categories once
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset pagination whenever filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [activeCategory, debouncedSearch, sortOption]);

  // Fetch products
  useEffect(() => {
    let cancelled = false;
// eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(null);

    const params = {};

    if (activeCategory !== "all") {
      params.categoryId = activeCategory;
    }

    if (debouncedSearch) {
      params.name_like = debouncedSearch;
    }

    if (sortOption === "price_asc") {
      params._sort = "price";
      params._order = "asc";
    } else if (sortOption === "price_desc") {
      params._sort = "price";
      params._order = "desc";
    } else if (sortOption === "rating") {
      params._sort = "rating";
      params._order = "desc";
    }

    getProducts(params)
      .then((data) => {
        if (!cancelled) {
          setProducts(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Failed to load products. Is JSON Server running?");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeCategory, debouncedSearch, sortOption]);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );
  
  const clearFilters = () => {
  setSearchTerm("");
  setActiveCategory("all");
  setSortOption("default");
};

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <div className="catalog-page container py-4">
      <div className="catalog-page__toolbar">
        <div className="catalog-page__search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="catalog-page__sort"
        >
          <option value="default">Sort: Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
        
        <button
          type="button"
          className="catalog-page__clear-btn"
          onClick={clearFilters}
           >
          Clear Filters
          </button>
      
      </div>

      <div className="catalog-page__filters">
        <button
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? "active" : ""}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {loading && (
        <p className="catalog-page__status">Loading products...</p>
      )}

      {error && (
        <p className="catalog-page__status catalog-page__status--error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <ProductGrid products={paginatedProducts} />

          {totalPages > 1 && (
            <div className="catalog-page__pagination">
              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CatalogPage;