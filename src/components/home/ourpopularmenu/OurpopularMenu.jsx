import { useEffect, useState } from "react";
import SectionTitle from "../../sheard/sectionTitel/SectionTitle";
import Menu from "./Menu";

const OurpopularMenu = () => {
  const [menup, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((data) => data.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenu(popularData);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        smalltitle="Check it out"
        bigtitle="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-2 space-x-10 space-y-5">
        {menup.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
    </section>
  );
};

export default OurpopularMenu;
