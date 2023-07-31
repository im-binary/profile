/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function NewRabbit() {
  return (
    <div css={newRabbitCss}>
      <div className='rabbit'>
        <div className='ear'>
          <div className='ear1'></div>
        </div>
        <div className='ear'>
          <div className='ear1'></div>
        </div>
        <div className='face'>
          <div className='eye'></div>
          <div className='eye'></div>
          <div className='mouse'></div>
          <div className='teeth left'></div>
          <div className='teeth right'></div>
        </div>
      </div>
    </div>
  );
}

const newRabbitCss = css`
  margin: 0 auto;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  .rabbit {
    font-size: 0;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
  }

  .rabbit .ear {
    display: inline-block;
    border: 3px solid pink;
    border-bottom: none;
    border-radius: 50px 50px 0 0;
    width: 100px;
    height: 200px;
    margin: 10px 50px 0 50px;
    background-color: pink;
  }

  .rabbit .ear1 {
    display: inline-block;
    border: 3px solid rgb(250, 86, 119);
    border-radius: 50px 50px 0 0;
    width: 50px;
    height: 170px;
    margin: 27px 20px 0 20px;
    background-color: rgb(250, 86, 119);
  }

  .rabbit .face {
    border: 3px solid pink;
    border-radius: 0 0 50px 50px;
    width: 300px;
    height: 150px;
    margin: -3px auto 0 auto;
    background-color: pink;
  }

  .rabbit .eye {
    display: inline-block;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin: 20px 30px;
    background-color: black;

    &::after {
      content: "";
      display: inline-block;
      border-radius: 50px;
      width: 20px;
      height: 20px;
      margin: 10px 10px;
      background-color: white;
      transform: translate(10px, 10px);
      transition: transform 0.5s ease-in-out;
    }
  }

  .rabbit .mouse {
    background-color: black;
    width: 45px;
    height: 5px;
    margin: 0 auto;
  }

  .rabbit .teeth {
    display: inline-block;
    width: 10px;
    height: 20px;
    background-color: white;
  }

  .rabbit .teeth.left {
    border: 3px solid black;
    border-right: 1px solid black;
    border-top: 0;
  }

  .rabbit .teeth.right {
    border: 3px solid black;
    border-left: 0;
    border-top: 0;
  }
`;
