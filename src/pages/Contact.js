// Contact  components
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// Contact data
import ContactHeroData from "../data/Contact/contact-hero-data.json";
import ContactFormData from "../data/Contact/contact-form-data.json";
import ContactInfoData from "../data/Contact/contact-info-data.json";

function Contact() {
  return (
    <>
      <ReactHelmet title="Contact" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <ContactHero nomobileimg data={ContactHeroData} />
      </div>
      {/* Contact Form Section */}
      <div data-aos="fade-up">
        <ContactForm data={ContactFormData} />
      </div>
      {/* Contact Info Section */}
      <div data-aos="fade-up">
        <ContactInfo data={ContactInfoData} />
      </div>
      {/* Newsletter Section  */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Contact;
