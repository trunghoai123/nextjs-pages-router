import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("@/components/Header/Header"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

const Page = () => {
  const router = require("next/router").useRouter();
  const [posts, setPosts] = useState([]);
  console.log(router.query);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        // "https//js-post-api.herokuapp.com/api/posts?_page=1"
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    })();
  }, []);

  const handleChangePage = () => {
    router.push(
      {
        pathname: "/posts/id",
        query: { _page: (Number(router.query._page) || 1) + 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <Header></Header>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => handleChangePage()}>next page</button>
    </div>
  );
};

export async function getStaticProps() {
  console.log("getStaticProps");
  return {
    props: {},
  };
}

export default Page;
