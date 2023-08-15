import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/edbonamigo.png",
      name: "Eduardo B. Müller",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Esse é um post criado a partir de um array estático mesmo, pra aprender conceitos de iteração com React! 🚀",
      },
      { type: "link", content: "github.com/edbonamigo" },
    ],
    publishedAt: new Date("2023-08-02 08:00:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/0ur0b0r0s.png",
      name: "Pedro R. de Souza",
      role: "Infrastructure Analyst",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur necessitatibus exercitationem laborum quibusdam magnam, quod dignissimos.",
      },
      { type: "link", content: "github.com/0ur0b0r0s" },
    ],
    publishedAt: new Date("2023-08-04 08:00:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
