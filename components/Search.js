import { Box, HStack, StatusBar, Text,VStack,Button,FormControl,Input,Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import {StyleSheet,View,Image,ScrollView} from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {baseUrl, api_key} from './api_config'
import { SelectList } from 'react-native-dropdown-select-list'
import Movies from './Movies'


const Search = (props) => {

    const [input, setInput] = useState('')
    const [currentType, setCurrentType] = useState('movie')
    const [showOutput,SetShowOutput] = useState(false)
    const [content, setContent] = useState('')
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        axios.get(`${baseUrl}/search/${props.type}`,{
            params:{
                api_key:api_key,
                query:input
            }
        }).then(respond=>{
            setContent(respond.data.results)
        }).catch(err=>{
            console.log(err)
        })
    }, [showOutput,rerender])

    const onSubmit = () => {

        if(input!=''){
            setRerender(!rerender)
            SetShowOutput(true)
            props.setType(currentType)
        }
    }

    const dropDownData = [
        {key:'1', value:'movie'},
        {key:'2', value:'tv'},
        {key:'3', value:'multi'},

    ]

    return(    
    <>

        <View style={styles.form_container}>
            <View style={styles.formControlContainer}>
                <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show</FormControl.Label>

                <Input
                placeholder='i.e. James Bond'
                variant='filled'
                bg='gray.200'
                width='85%'
                InputLeftElement={
                    <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                }
                onChangeText={value => {
                    setInput(value)
                }}
                />

                </FormControl>
            </View>

            <View style={styles.selectListContainer}>
            <FormControl isRequired>
        <SelectList 
            setSelected={(val) => setCurrentType(val)} 
            data={dropDownData} 
            save="value"
            placeholder='movie'
        />

      </FormControl>

            </View>


      <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
      </View>
      <View style={styles.contentContainer}>
      {showOutput&&        
              <ScrollView style={styles.scrollContainer}contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} >
              <View style={styles.container}>
                  <Movies content={content} 
                          current={props.current} setCurrent = {props.setCurrent} 
                          selected={props.selected} setSelected={props.setSelected}
                          type={props.type} setType={props.setType}/>
              
              </View>
  
              
          
          </ScrollView>}
      </View>


      
    </>)

}

const styles = StyleSheet.create({


    form_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3%',

      },
    
    container:{
        flex:1,
        width:'100%'
    },

    scrollContainer:{
        width:'100%',
        flex:1,

    },

    contentContainer:{
        width:'100%',
        flex:1,

    },

      formControlContainer: {
        marginRight: 10
      },
      selectListContainer: {
        flex: 1
      }

})

export default Search