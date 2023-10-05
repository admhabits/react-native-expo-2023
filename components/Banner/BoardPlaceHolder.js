import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {
    iconTv,
    iconSpeaker,
    iconArrowLeft,
    iconArrowRight,
  } from 'configs/Images';
import { Placeholder, PlaceholderLine, PlaceholderMedia, Fade } from 'rn-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const BoardPlaceHolder = () => {
    return (
        <View>
            <View style={styles.outer}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FFF', '#FFF']}
                style={styles.board1}>
                <View
                  style={{
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Placeholder Animation={Fade}>
                      <PlaceholderLine width={60} style={{ opacity: 0.3, marginTop: 20, height: 10 }} />
                    </Placeholder>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => onHandleArrowLeftMaklumat()}>
                      <Image
                        source={iconArrowLeft}
                        style={{ width: 10, height: 15, marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleArrowRightMaklumat()}>
                      <Image
                        source={iconArrowRight}
                        style={{ width: 10, height: 15, marginRight: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '50%',
                  }}>
                  <Placeholder Animation={Fade}>
                    <PlaceholderLine width={90} style={{ opacity: 0.3, marginTop: 10, height: 10}} />
                  </Placeholder>
                </View>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FFF', '#FFF']}
                style={styles.board2}>
                <View
                  style={{
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Placeholder Animation={Fade}>
                      <PlaceholderLine width={60} style={{ opacity: 0.3, marginTop: 20, height: 10,}} />
                    </Placeholder>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => onHandleArrowLeftPengumuman()}>
                      <Image
                        source={iconArrowLeft}
                        style={{ width: 10, height: 15, marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleArrowRightPengumuman()}>
                      <Image
                        source={iconArrowRight}
                        style={{ width: 10, height: 15, marginRight: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '50%',
                  }}>

                  <Placeholder Animation={Fade}>
                    <PlaceholderLine width={90} style={{ opacity: 0.3, marginTop: 10, height: 10 }} />
                  </Placeholder>

                </View>
              </LinearGradient>
            </View >
        </View>
    )
}

export default BoardPlaceHolder

const styles = StyleSheet.create({
    outer: {
        // position: 'absolute',
        zIndex: 1000,
        width: '100%',
        height: 50,
        marginTop: -20,
        marginRight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

      },
      board1: {
        backgroundColor: '#f7f7f7',
        width: '46%',
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#e3e3e3'
      },
      board2: {
        backgroundColor: '#f7f7f7',
        width: '46%',
        height: 50,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#e3e3e3'
      },
})
