import { Box, HStack, StatusBar, Text,VStack,Button } from 'native-base'
import {StyleSheet,View,Image} from 'react-native'


const Movies = (props) => {
    const {content} = props
  return (
      <>

      {content.map((movie, index) => (

          <View style={styles.container} key={index}>
              <Image
              style={styles.imgStyle}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{movie.original_name === undefined ? movie.original_title : movie.original_name}</Text>
                <Text>Popularity: {movie.popularity}</Text>
                <Text>Release Date: {movie.first_air_date === undefined ? movie.release_date : movie.first_air_date}</Text>
                <Button onPress={()=>{props.setSelected(movie.id);props.setCurrent("Details")}} style={styles.btnStyle}> More Detail</Button>
              </View>

          </View>
        ))}

      </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'start',
        margin:"3%"
    },

    imgStyle: {
        height:250,
        width:150
    },

    textContainer: {
        flex:1,
        margin:'2%',
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    btnStyle:{
        marginTop:'auto'
    }
    
})


export default Movies

