// React Helmet components
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

export default ReactHelmet;
