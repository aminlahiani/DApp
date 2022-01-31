// @mui material components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Recent Posts List Card components
import RecentPostCard from "../Cards/RecentPostCard";

function RecentPostsList(props) {
  const { data } = props;

  return (
    <Box pt={3}>
      <Typography variant="h6" color="textPrimary">
        Recent Posts
      </Typography>

      {data.map((item) => (
        <div>
          {/* RecentPostCard : src > components > Cards > TeamCard */}
          <RecentPostCard key={item.id} data={item} />
        </div>
      ))}
    </Box>
  );
}

export default RecentPostsList;
