import { Box, HStack, StatusBar, Text,VStack, FlatList } from 'native-base'
import {StyleSheet,View,ScrollView} from 'react-native'
import {useState,useEffect} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'
import {baseUrl, api_key} from './api_config'

import Movies from './Movies'

const MoviesContainer = (props) => {
    const [selected, setSelected] = useState("popular");
    const [content,setContent] = useState([])

    useEffect(() => {
    props.setType('tv');


        axios.get(`${baseUrl}/tv/${selected}`,{
            params:{
                api_key:api_key
            }
        }).then(response=>{

            setContent(response.data.results)
        }).catch(err=>{
            console.log(err)
        })
    }, [])


    useEffect(() => {

        axios.get(`${baseUrl}/tv/${selected}`,{
            params:{
                api_key:api_key
            }
        }).then(response=>{

            setContent(response.data.results)
        }).catch(err=>{
            console.log(err)
        })
    }, [selected])
  
    const data = [
        {key:'1', value:'on_the_air'},
        {key:'2', value:'popular'},
        {key:'3', value:'air_today'},
        {key:'4', value:'top_rated'}
    ]
  
  return (
      <>
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            placeholder='popular'
          />
        <ScrollView style={styles.scrollContainer}contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} >
            <View style={styles.container}>
                <Movies content={content} 
                        current={props.current} setCurrent = {props.setCurrent} 
                        selected={props.selected} setSelected={props.setSelected}
                        type={props.type} setType={props.setType}/>
            
            </View>

            
        
        </ScrollView>
        
      
      </>



  )
}


const styles = StyleSheet.create({
    scrollContainer:{
      width:'90%',


    },
    container: {

      width:'100%',

      margin:'3%'
    },

    content: {
        width:'100%'
    }

})

export default MoviesContainer

