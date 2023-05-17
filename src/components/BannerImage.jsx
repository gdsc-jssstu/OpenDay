// Used in department details page :)

const BannerImage = ({ title, img }) => {
  return (
    <div className="bg-primary">
      <div className="bg-secondary p-4">
        <span className="relative">
          <img src={img} className="shadow-2xl max-h-96 w-full object-cover" />
          {title && (
            <p className="absolute bg-white bottom-0 bg-opacity-60 py-6 w-full text-center text-lg md:text-2xl font-semibold">
              {title}
              <br /> Welcomes You
            </p>
          )}
        </span>
      </div>
    </div>
  );
};

export default BannerImage;
