import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,FlatList} from 'react-native';
    import db from '../config'
    import firebase from 'firebase'
    import MyHeader from '../components/MyHeader'

    export default class DonateScreen extends React.Component{
        constructor(){
            super()
            this.state=({
                requestedBooksList:[]
            })
            this.requestref=null
        }
        getRequestedBooksList = () => {
this.requestref=db.collection('requested_books').onSnapshot((snapshot)=>{
    var requestedBooksList=snapshot.docs.map(document=>document.data())
    this.setState({requestedBooksList:requestedBooksList})
})
        }


        componentDidMount(){
            this.getRequestedBooksList()
          }
        
          componentWillUnmount(){
            this.requestRef();
          }
        
          keyExtractor = (item, index) => index.toString()
        
          renderItem = ( {item, i} ) =>{
            return (
              <ListItem
                key={i}
                title={item.book_name}
                subtitle={item.reason_to_request}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                      <Text style={{color:'#ffff'}}>View</Text>
                    </TouchableOpacity>
                  }
                bottomDivider
              />
            )
          }

        render(){
            return(
                <View style={{flex:1}}>
                   <MyHeader title="Donate Books"/>
                   <View style={{flex:1}}>
                       {this.state.requestedBooksList===0 ?(
                       <View style={styles.subcontainer}>
                           <Text>
                               List of All requested Books
                           </Text>
                       </View>) : (
                           <FlatList keyExtractor={this.keyExtractor()} data={this.state.requestedBooksList} renderItem={this.renderItem()}/>
                       )
                       
                    }
                   </View>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        subContainer:{
          flex:1,
          fontSize: 20,
          justifyContent:'center',
          alignItems:'center'
        },
        button:{
          width:100,
          height:30,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:"#ff5722",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8
           }
        }
      })