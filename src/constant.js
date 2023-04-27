export const URLs = {
  email: "mailto:pongpong0121@kakao.com",
  github: "https://github.com/pongdang",
  velog: "https://velog.io/@pongdang",
  profile: "https://profile.pongdang.me/resume",
};

export const ResumeType = {
  default: {
    components: [
      "ProfileImage",
      "Name",
      "Info",
      "Introduce",
      "Career",
      "Work",
      "Education",
      "TechStack",
      "ProjectSection",
      "Contribute",
      "BooksInfo",
    ],
  },
  onlyResume: {
    components: ["ProfileImage", "Name", "Education", "Work", "TechStack", "ProjectSection", "Contribute", "BooksInfo"],
  },
  onlyIntroduce: {
    components: ["ProfileImage", "Name", "Info", "Introduce"],
  },
};
