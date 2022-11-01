import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "伽马影迷技术团队博客",
  description: "专注于互联网泛娱乐应用开发。「伽马」在粤语中和「今晚」谐音一样。",
  theme: defaultTheme({
    base: "/blog/",
    colorModeSwitch: false,
    logo: "https://v2.ext.ggt1024.com/assets/logo.png",
    docsBranch: "master",
    editLinkText: "编辑此页面",
    repo: "https://github.com/ggt1024/materials",
    navbar: [
      {
        text: "终端",
        link: "/userend/",
      },
      {
        text: "前端",
        link: "/frontend/",
      },
      {
        text: "后端",
        link: "/backend/",
      },
      {
        text: "工程",
        link: "/engineering/",
      },
      {
        text: "产品",
        children: [
          {
            text: "伽马影迷插件",
            link: "https://v2.ext.ggt1024.com/",
          },
          {
            text: "今晚看啥小程序",
            link: "https://ggt1024.com/#/productJwksMiniprog",
          },
        ],
      },
    ],
  }),
});
