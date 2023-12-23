import React, { ChangeEvent, useEffect, useState } from "react";
import { usersDataSource } from "../../../core/dataSource/remoteDataSource/users";
import Input from "../../common/base/Input";
import Button from "../../common/base/Button";
import { postsDataSource } from "../../../core/dataSource/remoteDataSource/posts";
import { Post } from "../../../core/types/Post";
import { useSelector } from "react-redux";
import { useLogin } from "../../../core/hooks/login.hook";

const FeedPage = () => {
  const [postData, setPostData] = useState({
    caption: "",
    post_image: null,
  });
  const [feed, setFeed] = useState([]);
  const [posts, setposts] = useState<Post[]>([]);
  const userLocalData = useSelector((global: any) => global.User);

  const [isLoggedIn, token] = useLogin();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const handleFormChange = (key: string, value: any) => {
    setPostData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePost = async () => {
    const response = await postsDataSource.create(postData);

    console.log(response);
  };

  useEffect(() => {
    const getFeed = async () => {
      try {
        const resFeed = await usersDataSource.getFollowers();

        setFeed(resFeed.feed);

        console.log(resFeed.feed);
      } catch (error) {
        console.log(error);
      }
    };

    getFeed();
  }, []);

  useEffect(() => {
    if (feed.length !== 0) {
      const user: any = feed[0];

      setposts(user.posts);
    }
  }, [feed]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    console.log(userLocalData);
  }, [userLocalData]);

  return (
    <div className="flex column">
      <Input
        placeholder="Caption"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleFormChange("caption", e.target.value);
        }}
      />

      <Input
        placeholder="Caption"
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleFormChange("post_image", e.target.files![0]);
        }}
      />

      <Button text="Post" onClicked={() => handlePost()} />

      {posts.length !== 0 &&
        posts.map((post) => (
          <div className="flex column" key={post.id}>
            <img
              src={`http://127.0.0.1:8000/images/posts/${post.image_name}`}
              alt=""
            />
            <p>{post.caption}</p>
          </div>
        ))}
    </div>
  );
};

export default FeedPage;
