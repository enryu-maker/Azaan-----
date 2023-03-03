import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Header } from '../../Component/Header'
import SurahCard from './SurahCard'
import FormInput from '../../Component/InputForm'
import FilterModal from '../Search/FilterModel'
import { COLORS } from '../../Constants/Theme'
import { IMAGES } from '../../Constants/Images'
import axios from 'axios'
export default function CompassScreen({
  navigation
}) {
  const[showFilterModel,setshowFilterModel] = React.useState(false)
  const [search,setSearch] = React.useState('')
  const [surah,setSurah] = React.useState([])

  React.useEffect(()=>{
    axios.get('https://api.alquran.cloud/v1/surah')
    .then((res)=>{
      console.log(res.data.data)
      setSurah(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  // search list according to search
  const filteredList = (search) => {
    return surah.filter((item) => {
      return item.englishName.toLowerCase().includes(search.toLowerCase())
    })
  }


  return (
    <View
    style={{
      flex: 1,
    }}>
    <Header title={'Surah سورہ'} />
    {
        showFilterModel &&
        <FilterModal isVisible={showFilterModel} onClose={()=>{
          setshowFilterModel(false)
        }}/>
      }
      <FormInput
        prependComponent={<View style={{
          justifyContent:"center",
          height:35,
          width:35,
          backgroundColor:COLORS.primary,
          borderRadius:12,
          alignSelf:"center",
          
        }}>
          <Image source={IMAGES.search} style={{
            height:22,
            width:22,
            alignSelf:"center",
            justifyContent:"center",
            tintColor:COLORS.background
          }}/> 
        </View>}
        placeholder={'search... تفص'}
        // img={IMAGES.filter}
        // onPress={()=>{
        //   setshowFilterModel(true)
        // }}
        value={search}
        onChange={(text)=>{
          setSearch(text)
        }}
        containerStyle={{
          marginBottom:10
        }}
      />
    <FlatList
      data={filteredList(search)}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>{
        return(
          <SurahCard
          name={item.name}
          urdu_name={item.englishName}
          type={item.englishName}
          distance={item.numberOfAyahs}
          onPress={()=>{
            navigation.navigate('Surah',{
              data:item
            })
          }}
          number={item.number}
          />
        )
      }
      }
    />
    </View>
  )
}