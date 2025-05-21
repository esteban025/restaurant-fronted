import { useEffect, useState } from "react";

export const GetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    const url = "http://localhost:3000/categories";
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message || "Error en fetching de categorias");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
      {loading && <p>Cargando categorías...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && categories.length === 0 && (
        <p>No se han encontrado categorías</p>
      )}
      {categories.map(
        ({ id, name_category, description_category, url_image }) => (
          <article key={id} className="">
            <figure className="w-full overflow-hidden rounded-lg">
              <img
                className="w-full aspect-square object-cover"
                src={url_image}
                alt={`Imagen de ${name_category}`}
              />
            </figure>
            <div className="flex flex-col gap-2 items-center text-center pt-4">
              <h3 className="font-playfair font-semibold text-2xl text-balance">
                {name_category}
              </h3>
              <p>{description_category}</p>
            </div>
          </article>
        )
      )}
    </section>
  );
};
