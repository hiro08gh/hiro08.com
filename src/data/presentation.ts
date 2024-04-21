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
    "プロダクト開発と犬が好き。Jamstackアーキテクチャーやサーバレス技術に興味があります。現在はmicroCMSでプロダクトエンジニアとして開発を行っています。",
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
      link: "https://github.com/hiro08gh",
    },
    {
      label: "はてなブログ",
      link: "https://blog.hiro08.com",
    },
    {
      label: "LAPRAS",
      link: "https://zenn.dev/hiro08gh",
    },
  ],
};
