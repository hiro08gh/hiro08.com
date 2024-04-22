type Social = {
  label: string;
  link: string;
};

type Presentation = {
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

export const presentation: Presentation = {
  title: "hiro08gh (Hiroki Ueda) 🐶",
  profile: "/profile.png",
  description:
    "Web アプリケーションエンジニア。プロダクト開発と犬が好き。Jamstack アーキテクチャーやサーバレス技術に興味があります。現在は microCMS で開発を行っています。",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/hiro08gh",
    },
    {
      label: "Github",
      link: "https://github.com/hiro08gh",
    },
    {
      label: "Zenn",
      link: "https://zenn.dev/hiro08gh",
    },
    {
      label: "はてなブログ",
      link: "https://code-log.hatenablog.com",
    },
    {
      label: "LAPRAS",
      link: "https://lapras.com/public/hiro08gh",
    },
  ],
};
