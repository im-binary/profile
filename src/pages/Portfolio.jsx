/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainSectionContainer } from "../style/main";
import { useMoveScroll } from "../hooks/useMoveScroll";

export default function Portfolio() {
  const menuText = ["야옹", "멍멍", "어흥"];
  const { elementRef: menuRef, onMoveToElement: onMoveToMenu } = useMoveScroll(menuText);

  return (
    <main css={portfolioContainer}>
      <h1>portfolio</h1>
      {menuText.map((el, index) => (
        <button type='button' onClick={() => onMoveToMenu(index)} key={el}>
          {el}
        </button>
      ))}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod hic
        recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore, repellat optio
        neque veniam.
      </p>

      {menuText.map((el, index) => (
        <div
          ref={menuRef.current[index]}
          css={css`
            padding-top: 100px;
          `}
          key={el}
        >
          <h2>{el}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus quaerat beatae debitis quod
            hic recusandae eveniet similique est? Ex temporibus assumenda tempore repellendus dignissimos labore,
            repellat optio neque veniam.
          </p>
        </div>
      ))}
    </main>
  );
}

const portfolioContainer = css`
  ${mainSectionContainer};
`;
