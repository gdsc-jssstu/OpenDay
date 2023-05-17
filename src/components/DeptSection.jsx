import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DeptSection = ({
  heading,
  content,
  isList = false,
  subContent,
  images,
}) => {
  return (
    <article className="tracking-wide">
      <h4 className="my-4 text-white text-2xl font-semibold ">{heading}</h4>

      {images && (
        <Carousel showThumbs={false}>
          {images.map((imagePath) => (
            <img src={imagePath} />
          ))}
        </Carousel>
      )}

      <section className="p-6 bg-secondary rounded-lg">
        {!isList ? (
          <p>{content}</p>
        ) : (
          <ul className="mx-2 list-disc tracking-wide">
            {content.map((ele, i) => (
              /**
               * key is set to index, since the array is never changed or reordered
               * ref: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
               */
              <li key={i}>{ele}</li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default DeptSection;
