export const URLs = {
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pongpong0121@kakao.com",
  github: "https://github.com/pongdang",
  velog: "https://velog.io/@pongdang",
};

export const ResumeType = {
  default: {
    components: [
      "ProfileImage",
      "Name",
      "Info",
      "Introduce",
      "Career",
      "TechStack",
      "Education",
      "ProjectSection",
      "Contribute",
      "BooksInfo",
    ],
  },
  onlyResume: {
    components: [
      "ProfileImage",
      "Name",
      "Career",
      "TechStack",
      "Education",
      "ProjectSection",
      "Contribute",
      "BooksInfo",
    ],
  },
  onlyIntroduce: {
    components: ["ProfileImage", "Name", "Info", "Introduce"],
  },
};
