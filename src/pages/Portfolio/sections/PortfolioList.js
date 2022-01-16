import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PortfolioCard from "components/Cards/PortfolioCard";

const posts = [
  {
    id: "24b76cac9a128cd949747090",
    author: {
      avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
      name: "Jie Yan Song",
    },
    category: "Programming",
    cover: "/static/mock-images/covers/cover_4.jpeg",

    readTime: "5 min",
    shortDescription:
      "Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.",
    title: "Why I Still Lisp, and You Should Too",
    url: "/portfolio-deatils",
  },
  {
    id: "a9c19d0caf2ca91020aac51f",
    author: {
      avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
      name: "Omar Darobe",
    },
    category: "Productivity",
    cover: "/static/mock-images/covers/cover_5.jpeg",

    readTime: "6 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url: "/portfolio-deatils",
  },
  {
    id: "44df90cbf89963b8aa655c7d",
    author: {
      avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
      name: "Siegbert Gottfried",
    },
    category: "Entrepreneurs",
    cover: "/static/mock-images/covers/cover_6.jpeg",

    readTime: "3 min",
    shortDescription:
      "Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.",
    title: "How Model View Controller (MVC) Architectures Work",
    url: "/portfolio-deatils",
  },
  {
    id: "24b76cac9a128cd949747080",
    author: {
      avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
      name: "Jie Yan Song",
    },
    category: "Programming",
    cover: "/static/mock-images/covers/cover_4.jpeg",

    readTime: "5 min",
    shortDescription:
      "Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.",
    title: "Why I Still Lisp, and You Should Too",
    url: "/portfolio-deatils",
  },
  {
    id: "a9c19d0caf2ca91020aacd1f",
    author: {
      avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
      name: "Omar Darobe",
    },
    category: "Productivity",
    cover: "/static/mock-images/covers/cover_5.jpeg",

    readTime: "6 min",
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.",
    title: "Scrum Has Hit the Glass Ceiling",
    url: "/portfolio-deatils",
  },
  {
    id: "44df90cbf89963b8aa625c7d",
    author: {
      avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
      name: "Siegbert Gottfried",
    },
    category: "Entrepreneurs",
    cover: "/static/mock-images/covers/cover_6.jpeg",

    readTime: "3 min",
    shortDescription:
      "Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.",
    title: "How Model View Controller (MVC) Architectures Work",
    url: "/portfolio-deatils",
  },
];



export const PortfolioList = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      minHeight: "100%",
      py: 6,
    }}
  >
    <Container>
      <Typography align="center" color="textPrimary" variant="h4">
        Build accessible React apps with speed
      </Typography>

      <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
        Build a beautiful, modern website with flexible, fully customizable, atomic MUI Components
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} md={4} xs={12}>
            <PortfolioCard
              cover={post.cover}
              category={post.category}
              title={post.title}
              shortDescription={post.shortDescription}
              url={post.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
