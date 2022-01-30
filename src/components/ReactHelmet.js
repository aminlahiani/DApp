import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ReactHelmet(props) {
  const { title } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | DAap - Digital Agency React template with MUI</title>
      </Helmet>
    </HelmetProvider>
  );
}

ReactHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ReactHelmet;
