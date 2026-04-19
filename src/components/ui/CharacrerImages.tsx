type Props = {
  images: string[];
  imageWidths?: string[];
  layout?: "default" | "angrybirds" | "lego";
};

function CharacterImages({ images, imageWidths = [], layout = "default" }: Props) {
  const w = (i: number, fallback: string) => imageWidths[i] ?? fallback;

  return (
    <div className="absolute bottom-0 left-0 w-full h-full">

      {/* 🟥 Angry Birds */}
      {layout === "angrybirds" && (
        <>
          <img
            src={images[0]}
            alt=""
            style={{ width: w(0, "52%") }}
            className="absolute bottom-7 left-[15px] object-contain z-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
          />
          <img
            src={images[1]}
            alt=""
            style={{ width: w(1, "50%") }}
            className="absolute bottom-7 right-[15px] object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[6deg]"
          />
        </>
      )}

      {/* 🟨 LEGO */}
      {layout === "lego" && (
        <>
          <img
            src={images[0]}
            alt=""
            style={{ width: w(0, "58%") }}
            className="absolute bottom-2 left-[3%] object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-5deg]"
          />
          <img
            src={images[1]}
            alt=""
            style={{ width: w(1, "58%") }}
            className="absolute bottom-4 right-[4%] object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[5deg]"
          />
        </>
      )}

      {/* 🔵 Default */}
      {layout === "default" && (
        <>
          <img
            src={images[0]}
            alt=""
            style={{ width: w(0, "70%") }}
            className="absolute bottom-0 left-0 object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-4deg]"
          />
          {images[1] && (
            <img
              src={images[1]}
              alt=""
              style={{ width: w(1, "65%") }}
              className="absolute bottom-0 right-0 object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[4deg]"
            />
          )}
        </>
      )}
    </div>
  );
}

export default CharacterImages;