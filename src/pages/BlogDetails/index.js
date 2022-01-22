import React from "react";
import { Details } from "./sections/Details";
import { Hero } from "./sections/Hero";


import { useParams } from "react-router-dom";
import BlogSideBar from "./sections/BlogSidebar";
import { Container, Grid, Typography } from "@mui/material";
//import RecentPostCard from "components/Cards/RecentPostCard";
import RecentPostsList from "components/BlogDetails/RecentPostsList";

import BlogsData from "data/Blogs/blogs-data.json";
function index() {
  const parameter = useParams();
  const postId = parameter.postId;
  const data = BlogsData.filter((blog) => blog.id === postId);
  const data1 = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Hero />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <Details data={data[0]} />
          </Grid>
          <Grid item md={4} xs={12}>
            <RecentPostsList data={BlogsData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
