import { Helmet } from "react-helmet-async";
import SheardBanner from "../OurMenuPage/ourMenuBanner/SheardBanner";
import contactB from "../../assets/contact/banner.jpg";
import ContactFrom from "./contactFrom/ContactFrom";
import Location from "./location/Location";
import SectionTitle from "../sheard/sectionTitel/SectionTitle";

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
      <Location></Location>
      <SectionTitle
        smalltitle="Send Us a Message"
        bigtitle="CONTACT FORM"
      ></SectionTitle>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default ContactPage;
