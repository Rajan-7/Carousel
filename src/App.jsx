import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((cur) => (
              <div className="bg-white h-[500px] text-black rounded-xl ">
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center ">
                  <img
                    src={cur.image}
                    alt="Carousel"
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{cur.name}</p>
                  <p className="text-centre">{cur.description}</p>
                  <button className="bg-indigo-500 text-lg py-1 px-6 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "x",
    image: "/image/blogimage.webp",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
  {
    name: "a",
    image: "/image/blogimage1.jpeg",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
  {
    name: "b",
    image: "/image/blogimage2.jpeg",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
  {
    name: "c",
    image: "/image/blogimage3.jpeg",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
  {
    name: "y",
    image: "/image/blogimage.webp",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
  {
    name: "z",
    image: "/image/blogimage.webp",
    description:
      "Life is a dynamic tapestry of moments, weaving together highs and lows, laughter and tears, ultimately shaping our individual narratives and collective human experience.",
  },
];

export default App;
