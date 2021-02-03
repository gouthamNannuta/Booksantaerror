import React,{Component}from 'react';
import {Header} from 'react-native-elements'

const MyHeader = props => {
    return(
        <Header centerComponent={{
            text:props.title,style:{color:"brown",fontSize:20,fontWeight:"bold"}

        }} ></Header>
    )
};
export default MyHeader;