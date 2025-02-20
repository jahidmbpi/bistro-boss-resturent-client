import { Helmet } from "react-helmet-async";
import SheardBanner from "../OurMenuPage/ourMenuBanner/SheardBanner";
import contactB from "../../assets/contact/banner.jpg";
import ContactFrom from "./contactFrom/ContactFrom";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss || Our Menu</title>
      </Helmet>
      <SheardBanner
        img={contactB}
        heading={"contact us"}
        subheading={"would you like to try a dish ?"}
      ></SheardBanner>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default ContactPage;
