import { Button, FormControl, HStack, Icon, Input, VStack, Text} from 'native-base'
import { StyleSheet, View} from 'react-native';

const Topbar = (props) => {
    const { current, setCurrent } = props

    return(

            <View style={styles.container}>
            <Button style={styles.item} onPress={()=>{setCurrent("Movies")}}>Movies</Button>
            <Button style={styles.item} onPress={()=>{setCurrent("Search")}}>Search</Button>
            <Button style={styles.item} onPress={()=>{setCurrent("TV")}}>TV</Button>


            </View>

    )
}

const styles = StyleSheet.create({
    container: {

      display:'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      height: '6%',
      justifyContent: 'space-between',
    },

    item:{
        width:'33%',
        padding: 4,
        margin:0.3
    }
})

export default Topbar