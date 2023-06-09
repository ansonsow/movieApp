
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {NativeBaseProvider} from 'native-base'
import {useState} from 'react'




import Header from './components/Header'
import Topbar from './components/Topbar'
import MoviesContainer from './components/MoviesContainer'
import Details from './components/Details'
import Search from './components/Search'
import TVContainer from './components/TVContainer'

export default function App() {

  const [current, setCurrent] = useState('Movies')
  const [selected, setSelected] = useState('')
  const [type, setType] = useState('')


  return (
    <NativeBaseProvider>
      <Header/>
      <SafeAreaView style={styles.container}>

        
        <Topbar current={current} setCurrent = {setCurrent}/>

        <View style={styles.content}>
        {
          current === 'Movies' ? (
            <MoviesContainer current={current} setCurrent={setCurrent} 
                             selected={selected} setSelected={setSelected} 
                             type={type} setType={setType}/>
          ) : current === 'Details' ? (
            <Details current={current} setCurrent={setCurrent} 
                     selected={selected} setSelected={setSelected}
                     type={type} setType={setType}/>
          ) : current === 'Search' ?(
            <Search current={current} setCurrent={setCurrent} 
                    selected={selected} setSelected={setSelected}
                    type={type} setType={setType}/>
          ) : current === 'TV' ?(
            <TVContainer current={current} setCurrent={setCurrent} 
                        selected={selected} setSelected={setSelected}
                        type={type} setType={setType}/>
          ) : (
            <></>
          )
        }
        </View>


      </SafeAreaView>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#999999',
  },

  content: {
    flex: 1,
    height:'100%',
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
