import React from 'react';
import {   TextInput, StyleSheet } from 'react-native';
// not needed because it would be hard to add onChange to this component
export default function  InputField (props) {



    return(

      <TextInput
      multiline = {true}
       numberOfLines = {4}
       margin = {50}
       padding = {10}
       placeholder= {props.placeholder}
       placeholderTextColor = {'green'}


      padding = {props.padding}
      style = {props.style}
        editable = {true}
        maxLength = {40}
      />

    )

}
