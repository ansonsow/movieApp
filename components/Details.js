import {Text} from 'native-base'
import {StyleSheet,View,Image} from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {baseUrl, api_key} from './api_config'

const Details = (props)=>{
    const [content, setContent] = useState('')
    useEffect(() => {
        axios.get(`${baseUrl}/${props.type}/${props.selected}`,{
            params:{
                api_key:api_key
            }
        }).then(respond=>{
            setContent(respond.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    const handleClick = () => {
        if(props.type==='movie'){
            props.setCurrent("Movies")
        }else{
            props.setCurrent("TV")
        }
    }


    return(
    <>
        <Text style={styles.topLeft} onPress={handleClick}>Back to list</Text>
        <View style={styles.container}>
            <Text style={styles.title}>{content.original_name === undefined ? content.original_title : content.original_name}</Text>
            <Image
              style={styles.imgStyle}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${content.poster_path}` }}
            />

            <Text style={styles.desc}>{content.overview}</Text>
            <Text style={styles.info}>Popularity:{content.popularity} | Release Date:{content.first_air_date == '' ? content.release_date : content.first_air_date}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        margin:"3%"
    },

    imgStyle: {
        height:400,
        width:275
    },

    topLeft:{
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 10,
        zIndex: 11
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:'2%',
        marginTop:'6%'
    },

    desc:{
        marginTop:'2%',
        marginBottom:'2%'
    },

    info:{
        fontSize:10
    }
})

export default Details