import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const BlogPage = () => {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  const contentKey = "358a24520b048a7e4c64119034";
  const url = "https://oshan.xyz/";

  useEffect(() => {
    axios
      .get(`${url}/ghost/api/v3/content/posts/${postId}/?key=${contentKey}`)
      .then(function (response) {
        setPost(response.data.posts[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [postId]);

  return <div dangerouslySetInnerHTML={{ __html: post.html }}></div>;
};

export default BlogPage;
