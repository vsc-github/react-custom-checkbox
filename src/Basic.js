import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
            position: relative;
            text-align: left;
            input{
              visibility: hidden;
              position: absolute;
              top: 0;
              left: 0;
              letter-spacing: 0;
              webkit-appearance: checkbox;
              background-color: initial;
              border: initial;
              -webkit-rtl-ordering: logical;
              user-select: text;
              cursor: auto;
              text-rendering: auto;
              color: initial;
              word-spacing: normal;
              text-transform: none;
              text-indent: 0px;
              text-shadow: none;
              display: inline-block;
              text-align: start;
              -webkit-writing-mode: horizontal-tb;
            }
            .filler{
              position: relative;
              width: 1rem;
              height: 1rem;
              background-color: transparent;
              border: 1.4px solid #c2c2c2;
              border-radius: 1.5px;
              box-sizing: border-box;
              display: inline-block;
              vertical-align: middle;
              cursor: pointer;
            }
            .filler::before{
              position: absolute;
              content: '';
              left: .25rem;
              top: 0.06rem;
              width: .38rem;
              height: .63rem;
              border: solid #fff;
              border-width: 0px 2px 2px 0px;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              display: none;
            }
            input:checked + .filler{
              background: #707070;
              border: #707070;
            }

            input:checked + .filler::before{
              display: block;
            }
            .title{
              vertical-align: bottom;
              font-size: .9rem;
              padding-left: .3rem;
              color: #212121;
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1;
              cursor: pointer;
            }
`;


const CheckBox = ({ labelText, checked, onChangeFunc, className, value, name, id }) =>
  <Label className={className}>
    <input
      value={value} checked={checked} onChange={onChangeFunc} type="checkbox" name={name} id={id}
    />
    <div className="filler" />
    <div className="title">{ labelText }</div>
  </Label>;


CheckBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
  onChangeFunc: PropTypes.func,
  wrapperClassName: PropTypes.string,
  value: PropTypes.string,
};

export default CheckBox;
