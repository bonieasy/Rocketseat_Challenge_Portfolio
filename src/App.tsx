import { GlobalStyle } from "./styles/global";
import { Profile } from "./components/Profile";
import React from "react";
import { Links } from "./components/Links";
import { Tecnologies } from "./components/Tecnologies";
import { Myproject } from "./components/MyProjects";
import { Experiencies } from "./components/Experiencies";
import { Education } from "./components/Education";
import { Project01 } from "./components/Project01";
import { Project02 } from "./components/Project02";
import { RecentPosts } from "./components/RecentPosts";
import { Posts } from "./components/Post";


export function App() {
  return (
    <>
    <Profile />
    <Links />
    <Tecnologies />
    <Experiencies />
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