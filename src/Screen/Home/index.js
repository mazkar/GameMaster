import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './style';

import {
  getAllGame,
  getGenre,
  setPage,
  setPageDefault,
  setId,
} from './Reducer/HomeAction';
import {setLoading} from '../../Store/GlobalAction';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';

//component
import ButtonGenre from '../../Component/ButtonGenre';
import LoadingComp from '../../Component/LoadingComp';
import Header from '../../Component/Header';

export default function Home(props) {
  const [allGame, setAllGame] = useState([{}]);
  const [pages, setPages] = useState(15);

  const dispatch = useDispatch();

  const dataCheckList = useSelector(state => state.HomeReducer.checklist);

  const getId = item => {
    dispatch(setId(item.id));
    props.navigation.navigate('Detail');
  };
  const getPage = () => {
    dispatch(setPage(5));
    dispatch(getAllGame(...Games));
  };

  useEffect(() => {
    dispatch(setPageDefault());
    dispatch(getAllGame());
    dispatch(getGenre());
    dispatch(setLoading(false));
  }, [dispatch]);
  const Genre = useSelector(state => state.HomeReducer.genres);
  const Games = useSelector(state => state.HomeReducer.allGames);
  const Load = useSelector(state => state.GlobalReducer.loading);

  return (
    <>
      <SafeAreaView style={styles.global}>
        <ScrollView>
          <View>
            <Header />
          </View>
          <View>
            <ButtonGenre />
          </View>
          <>
            <View style={styles.allGame}>
              <Text
                style={{fontSize: ms(32), color: 'white', fontWeight: '800'}}>
                All Games
              </Text>
            </View>
            <View>
              <FlatList
                style={styles.flatlist}
                data={Games}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => getId(item)}>
                    <ScrollView style={styles.containerContent}>
                      <View>
                        <View>
                          <Image
                            style={styles.imgContent}
                            source={{uri: `${item.background_image}`}}
                          />
                        </View>

                        <View style={styles.content}>
                          <View style={styles.containerGenre}>
                            {item.genres ? (
                              item?.genres.map((e, i) => {
                                return (
                                  <>
                                    <View style={styles.genre}>
                                      <Text
                                        style={{
                                          color: '#ffffff',
                                          fontWeight: '400',
                                        }}>
                                        {e.name}
                                      </Text>
                                    </View>
                                  </>
                                );
                              })
                            ) : (
                              <></>
                            )}

                            <View style={styles.containerRate}>
                              <Text
                                style={{
                                  color: '#f3ad2e',
                                  fontWeight: '500',
                                  alignSelf: 'center',
                                }}>
                                {item.rating}
                              </Text>
                            </View>
                          </View>

                          <View>
                            <Text style={styles.txtTitle}>{item.name}</Text>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  </TouchableOpacity>
                )}
                ListFooterComponent={
                  Load ? (
                    <ActivityIndicator size={ms(48)} color="white" />
                  ) : (
                    <>
                      <View>
                        <TouchableOpacity style={styles.show} onPress={getPage}>
                          <Text
                            style={{
                              fontSize: ms(14),
                              color: 'white',
                              fontWeight: '500',
                            }}>
                            Show More
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  )
                }
              />
            </View>
          </>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
