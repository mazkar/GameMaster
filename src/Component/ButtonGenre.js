import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {Input, Button} from 'react-native-elements';

import {
  setGenresName,
  getGenre,
  getGameByGenre,
} from './../Screen/Home/Reducer/HomeAction';
import {setLoading} from '../Store/GlobalAction';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';
import LoadingComp from './LoadingComp';

export function ButtonGenre(props) {
  const [activeGenre, setActiveGenre] = useState(0);

  const dispatch = useDispatch();

  const getGenreName = e => {
    dispatch(setGenresName(e.name));
    console.log(e, 'e');
  };

  const gameByGenre = () => {
    dispatch(getGameByGenre());
    dispatch(setLoading(true));
  };
  useEffect(() => {
    dispatch(getGenre());
    dispatch(getGameByGenre());
    dispatch(setLoading(false));
  }, [dispatch]);
  const Genre = useSelector(state => state.HomeReducer.genre);
  const Games = useSelector(state => state.HomeReducer.gameByGenre);
  const selectedGenre = useSelector(state => state.HomeReducer.genres);
  const Load = useSelector(state => state.GlobalReducer.loading);
  return (
    <View>
      {Load ? (
        <LoadingComp />
      ) : (
        <>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Genre?.length > 0 ? (
                Genre.map((e, i) => {
                  return (
                    <>
                      <View style={styles.containerGenre}>
                        <TouchableOpacity
                          onPress={() => {
                            setActiveGenre(i);
                            console.log(i, 'i');
                            getGenreName(e);
                            gameByGenre();
                          }}
                          style={[
                            {
                              backgroundColor:
                                activeGenre === i ? '#0000' : '#18364e',
                            },
                            styles.genre,
                          ]}
                          key={i}>
                          <Text style={styles.txtGenre}>{e.name}</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                })
              ) : (
                <></>
              )}
            </ScrollView>
          </View>
          <View>
            <View style={styles.ContainerTitle}>
              <Text
                style={{color: 'white', fontSize: ms(32), fontWeight: '600'}}>
                Genre {selectedGenre}
              </Text>
            </View>
            {Games.length > 0 ? (
              <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.FlatList}
                horizontal
                data={Games}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginRight: ms(16)}}>
                    <View>
                      <Image
                        source={{uri: `${item.background_image}`}}
                        style={{
                          height: ms(240),
                          width: ms(220),
                          borderTopRightRadius: ms(10),
                          borderTopLeftRadius: ms(10),
                        }}
                      />
                    </View>
                    <View style={styles.containerContent}>
                      <View style={styles.containerRating}>
                        <Text
                          style={{
                            color: '#f3ad2e',
                            fontWeight: '500',
                            alignSelf: 'center',
                          }}>
                          {item.rating}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: '600',
                            fontSize: ms(22),
                            marginLeft: ms(12),
                            marginTop: ms(10),
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <></>
            )}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerGenre: {
    marginTop: ms(32),
  },
  genre: {
    borderColor: 'white',
    borderWidth: ms(1),
    width: ms(104),
    borderRadius: ms(6),
    height: ms(32),
    marginLeft: ms(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtGenre: {
    color: '#f2f2f2',
    fontWeight: '500',
  },
  ContainerTitle: {
    marginLeft: ms(12),
    marginTop: ms(24),
  },
  FlatList: {
    marginLeft: ms(12),
    marginTop: ms(24),
  },
  containerContent: {
    backgroundColor: '#202020',
    height: ms(144),
    width: ms(220),
    alignSelf: 'center',
    borderBottomRightRadius: ms(10),
    borderBottomLeftRadius: ms(10),
  },
  containerRating: {
    backgroundColor: '#202020',
    borderColor: '#f3ad2e',
    borderWidth: ms(2),
    marginLeft: ms(10),
    borderRadius: ms(6),
    height: ms(32),
    width: ms(42),
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: ms(12),
  },
});
