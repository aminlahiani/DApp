import ContactHero from "components/Contact/ContactHero";
import ContactForm from "components/Contact/ContactForm";
import ContactInfo from "components/Contact/ContactInfo";
import CtaNewsletter from "components/Cta/CtaNewsletter";
//data
import ContactHeroData from "data/Contact/contact-hero-data.json";
import ContactFormData from "data/Contact/contact-form-data.json";
import ContactInfoData from "data/Contact/contact-info-data.json";

function Contact() {
  return (
    <div>
      {/* {JSON.stringify(ContactHeroData)} */}
      <ContactHero data={ContactHeroData} />
      <ContactForm data={ContactFormData} />
      <ContactInfo data={ContactInfoData} />

      <CtaNewsletter />
    </div>
  );
}

export default Contact;
