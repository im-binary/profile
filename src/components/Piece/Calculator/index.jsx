/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function Calculate() {
  return (
    <section css={calculatorCss}>
      <div className='screen'>
        <div className='formula calculator__display--bare'>
          <div>
            <span className='calculator__operend--left'>0</span>
            <span className='calculator__operator'>+</span>
            <span className='calculator__operend--right'>0</span>
            <span className='calculator__equal'>=</span>
            <span className='calculator__result'>0</span>
          </div>
        </div>
        <div className='calculator__display--for-advanced'>0</div>
      </div>

      <div className='button-wrapper'>
        <button className='clear'>AC</button>
        <button className='operator'>/</button>
        <button className='operator'>*</button>
        <button className='delete'>⌫</button>

        <button className='number'>7</button>
        <button className='number'>8</button>
        <button className='number'>9</button>
        <button className='operator'>-</button>

        <button className='number'>4</button>
        <button className='number'>5</button>
        <button className='number'>6</button>
        <button className='operator'>+</button>

        <button className='number'>1</button>
        <button className='number'>2</button>
        <button className='number'>3</button>
        <button className='operator calculate'>=</button>

        <button className='number zero'>0</button>
        <button className='decimal'>.</button>
      </div>
    </section>
  );
}

const calculatorCss = css`
  & {
    padding: 20px;
    background-color: #374353;
    border-radius: 40px;
    width: fit-content;
    margin: 0 auto;
  }

  .screen {
    border: 10px inset #53606e47;
    margin-bottom: 20px;
    border-radius: 10px;
    position: relative;
  }

  .screen .calculator__display--bare {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    height: 100%;
    padding-right: 8px;
    font-size: 35px;
    color: #e9e9e9;
  }

  .calculator__equal,
  .calculator__result {
    color: grey;
  }

  .calculator__equal,
  .calculator__operator {
    margin: 0 10px;
  }

  .screen .calculator__display--for-advanced {
    display: none;
    position: absolute;
    top: 29px;
    right: 8px;
    font-size: 35px;
    color: #ffa89e;
  }

  .button-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 65px);
    grid-template-rows: repeat(5, 65px);
    grid-gap: 16px;
  }

  .button-wrapper button {
    border-radius: 22px;
    border: none;
    background-color: #374353;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: -1px -1px 7px -1px #7f879047, 4px 4px 6px 1px rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in-out;
  }

  .button-wrapper button:hover {
    transform: scale(0.95);
  }

  .button-wrapper button:active {
    transform: scale(0.9);
    background-color: #2d3949;
    box-shadow: inset -1px -1px 4px -1px #7f879047;
  }

  .button-wrapper button.operator.calculate {
    grid-column: 4/5;
    grid-row: 4/6;
  }

  .button-wrapper button.number.zero {
    grid-column: 1/3;
    grid-row: 5/6;
  }

  .button-wrapper .number,
  .button-wrapper .decimal,
  .button-wrapper .delete {
    color: #e9e9e9;
  }

  .button-wrapper .operator {
    color: #859092;
  }

  .button-wrapper .clear {
    color: #ffa89e;
  }
`;
