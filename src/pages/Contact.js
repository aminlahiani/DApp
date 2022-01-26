//Contact page components
import ContactHero from "components/Contact/ContactHero";
import ContactForm from "components/Contact/ContactForm";
import ContactInfo from "components/Contact/ContactInfo";
import CtaNewsletter from "components/Cta/CtaNewsletter";

//Contact page data
import ContactHeroData from "data/Contact/contact-hero-data.json";
import ContactFormData from "data/Contact/contact-form-data.json";
import ContactInfoData from "data/Contact/contact-info-data.json";

function Contact() {
  return (
    <div>
      {/* {JSON.stringify(ContactHeroData)} */}
      <div data-aos="fade-up">
        <ContactHero data={ContactHeroData} />
      </div>
      <div data-aos="fade-up">
        <ContactForm data={ContactFormData} />
      </div>
      <div data-aos="fade-up">
        <ContactInfo data={ContactInfoData} />
      </div>
      <div data-aos="fade-up">
        <CtaNewsletter />
      </div>
    </div>
  );
}

export default Contact;
