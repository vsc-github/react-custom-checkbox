import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
            
            display: flex;
            align-items: center;
            position: relative;
            text-align: left;
            user-select: none;
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
              width: ${(props) => {
                return props.size === undefined ? '1rem' : `${props.size}rem;`;
  }}
              height: ${(props) => {
                return props.size === undefined ? '1rem' : `${props.size}rem;`;
  }}
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
              left: ${(props) => {
                return props.size === undefined ? '.25rem' : `${props.size * 0.25}rem;`;
  }}
              top: ${(props) => {
                return props.size === undefined ? '.06rem' : `${props.size * 0.06}rem;`;
  }}
              width: ${(props) => {
                return props.size === undefined ? '.38rem' : `${props.size * 0.38}rem;`;
  }}
              height: ${(props) => {
                return props.size === undefined ? '.63rem' : `${props.size * 0.63}rem;`;
  }}
  
              border-color: ${(props) => {
                return props.accentColor === undefined ? '#ffffff;' : `${props.accentColor};`;
  }}
              border-style: solid;
              border-width: 0px 2px 2px 0px;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              display: none;
            }
            input:checked + .filler{
              background: ${(props) => {
                return props.baseColor === undefined ? '#707070;' : `${props.baseColor};`;
  }}
              border: ${(props) => {
                return props.baseColor === undefined ? '#707070;' : `${props.baseColor};`;
  }}
            }

            input:checked + .filler::before{
              display: block;
            }
            .title{
              vertical-align: bottom;
              font-size: ${(props) => {
                return props.size === undefined ? '.9rem' : `${props.size * 0.66}rem;`;
  }}
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


const CheckBox = ({ labelText, checked, onChangeFunc, className, value, name, id, size, baseColor, accentColor }) =>
  <Label className={className} size={size} baseColor={baseColor} accentColor={accentColor} >
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
  className: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.number,
  baseColor: PropTypes.string,
  accentColor: PropTypes.string,
};

export default CheckBox;
