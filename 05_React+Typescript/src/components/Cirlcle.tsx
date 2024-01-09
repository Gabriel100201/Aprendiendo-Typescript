import { useEffect, useState } from "react";

type colorHex = `#${string}`;

export const Circle = (props: { colorBg: colorHex; textColor: colorHex }) => {
  const { colorBg, textColor } = props;
  const [isClicked, setIsClicked] = useState<Boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    console.log("Is clicked");
  }, [isClicked]);

  return (
    <section className="flex justify-center items-center">
      <div
        onClick={handleClick}
        className={`w-32 flex justify-center items-center rounded-full h-32`}
        style={{ backgroundColor: colorBg, color: textColor }}
      >
        <span className="font-bold">Red</span>
      </div>
    </section>
  );
};
