import { css } from "@emotion/react";

const printStyle = css`
  @media print {
    padding: 40px;

    // Name 컴포넌트
    article[name="Name"] > h1 {
      @media print {
        margin-top: 0px !important;
      }
    }

    // Work 컴포넌트
    article[name="Work"] {
      @media print {
        margin-top: 120px;
        page-break-before: always;
      }
    }

    // ProjectSection 컴포넌트
    article[name="ProjectSection"] {
      > div {
        display: block;

        > section {
          > div {
            padding-bottom: 0px !important;
            padding-left: 0 !important;
          }

          > div:nth-of-type(2) {
            > p:nth-of-type(1) {
              font-size: 2.4rem !important;
              text-align: left;
              text-indent: unset;
            }

            > p:nth-of-type(2) {
              margin: 0;
            }

            > div.print {
              display: block !important;
              text-align: right !important;
              + div {
                height: auto;
                margin: 0;
                padding: 0;
                margin-bottom: 20px;
              }
            }

            ul {
              margin: 0;
              padding: 0;
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    // ProjectSection 컴포넌트
    article[name="ProjectSection"] {
      color: red;
      margin-top: 120px;
      page-break-before: always;
    }

    // Contribute 컴포넌트
    article[name="Contribute"] {
      margin-top: 120px;
      page-break-before: always;

      ul {
        display: block;

        > li {
          padding-left: 0 !important;

          p:nth-of-type(1) {
            margin: 0;
            text-align: left;
            text-indent: unset;
            font-size: 2.4rem !important;
          }

          p {
            margin-top: 4px;
            display: block !important;
          }

          p:last-child {
            margin-top: 10px;
          }
        }
      }
    }

    // BooksInfo 컴포넌트
    article[name="BooksInfo"] > div {
      display: block;
      padding-left: 0 !important;

      li {
        h1 {
          font-size: 2.4rem;
          margin-bottom: 10px;
        }
        span {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

const defaultType = css`
  // ProfileImage 컴포넌트
  @media print {
    article[name="ProfileImage"] {
      display: none;
    }

    // ProfileImage 컴포넌트
    article[name="Education"] {
      margin-top: 120px;
      page-break-before: always;
    }

    // ProfileImage 컴포넌트
    article[name="Career"] {
      display: none;
    }

    // TechStack 컴포넌트
    article[name="TechStack"] {
      /* margin-top: 120px;
      page-break-before: always; */

      li:nth-of-type(4) {
        margin-top: 120px;
        page-break-before: always;
      }
    }

    // ProjectSection 컴포넌트
    article[name="ProjectSection"] {
      margin-top: 120px;
      page-break-before: always;
    }
  }
`;

const onlyResumeType = css`
  // ProfileImage 컴포넌트
  @media print {
    article[name="ProfileImage"] {
      display: none;
    }

    // TechStack 컴포넌트
    article[name="TechStack"] {
      /* margin-top: 120px;
      page-break-before: always; */

      li:nth-of-type(4) {
        margin-top: 120px;
        page-break-before: always;
      }
    }
    // ProjectSection 컴포넌트
    article[name="ProjectSection"] {
      margin-top: 120px;
      page-break-before: always;
    }
  }
`;

const onlyIntroduceType = css`
  // ProfileImage 컴포넌트
  @media print {
    article[name="ProfileImage"] {
      display: none;
    }

    // Introduce 컴포넌트
    article[name="Introduce"] {
      p {
        line-height: 3rem !important;
      }
    }
  }
`;

const resumtStyle = {
  default: defaultType,
  onlyResume: onlyResumeType,
  onlyIntroduce: onlyIntroduceType,
};

export { printStyle, resumtStyle };
