import { GlobalStyle } from "./styles/global";
import { Left } from "./components/Profile";
import React from "react";
import { Myproject } from "./components/MyProjects";
import { Education } from "./components/Education";
import { Project01 } from "./components/Project01";
import { Project02 } from "./components/Project02";
import { RecentPosts } from "./components/RecentPosts";
import { Posts } from "./components/Post";


export function App() {
  return (
    <>
    <Left />
    <Myproject />
    <Project01 />
    <Project02 />
    <RecentPosts />
    <Posts />
    <Education />
    <GlobalStyle />
      </>
  );
}