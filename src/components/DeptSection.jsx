import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DeptSection = ({ heading, content, isList = false, images }) => {
  return (
    <article className="tracking-wide">
      <h4 className="my-4 text-white text-2xl font-semibold ">{heading}</h4>

      {images && (
        <div className="flex justify-center">
          <Carousel showThumbs={false} className="mb-4  max-w-3xl">
            {images.map((imagePath, i) => (
              /**
               * key is set to index, since the array is never changed or reordered
               * ref:
               * https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
               */
              <img src={imagePath} key={i} />
            ))}
          </Carousel>
        </div>
      )}
      <section className="p-6  bg-secondary rounded-lg">
        {!isList ? (
          <p>{content}</p>
        ) : (
          <ul className="mx-2 list-disc tracking-wide">
            {content.map((ele, i) => (
              /**
               * key is set to index, since the array is never changed or reordered
               * ref:
               * https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
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
