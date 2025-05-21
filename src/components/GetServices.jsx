import { services } from "src/data/services";

export const GetServices = () => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
      {services.map(({ id, name_service, description_service, url_image }) => (
        <article key={id} className="">
          <figure className="w-full overflow-hidden rounded-lg">
            <img
              className="w-full aspect-square object-cover"
              src={url_image}
              alt={`Imagen de ${name_service}`}
            />
          </figure>
          <div className="flex flex-col gap-2 items-center text-center pt-4">
            <h3 className="font-playfair font-semibold text-2xl text-balance">
              {name_service}
            </h3>
            <p>{description_service}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
