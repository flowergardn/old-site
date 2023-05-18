export interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    readingTime: string;
    draft?: boolean;
  };
}

export interface Project {
  url: string;
  frontmatter: {
    title: string;
    shortDesc: string;
    github: string;
    languages: string;
    draft?: boolean;
  };
}
