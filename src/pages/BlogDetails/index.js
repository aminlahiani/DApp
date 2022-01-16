import React from "react";
import { Details } from "./sections/Details";
import { Hero } from "./sections/Hero";

import BlogsData from "data/blog/blogs-data.json";
import { useParams } from "react-router-dom";
function index() {
  const parameter = useParams();
  const postId = parameter.postId;
  const data = BlogsData.filter((blog) => blog.id === postId);
  return (
    <div>
      <Hero />
      <Details data={data[0]} />
    </div>
  );
}

export default index;
