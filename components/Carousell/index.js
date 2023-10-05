/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';

const Carousell = props => {
  const { renderItem, data, title, onPress } = props;

  const SliderWidth = Dimensions.get('screen').width;

  return (
    <>
      <View
        style={{
          width: '100%',
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 14,
            marginHorizontal: 15,
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Regular',
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontSize: 14,
              color: '#2D29F5',
              fontFamily: 'Roboto-Regular',
              marginHorizontal: 15,
            }}>
            {'Lainnya >>'}
          </Text>
        </TouchableOpacity>
      </View>
      {
        data.length === 0 ? (
          <>
            <Placeholder Animation={Fade} style={{}}>
              <View
                style={{
                  width: '100%',
                  marginBottom: 0,
                  marginHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-around'
                }}>
                <PlaceholderLine
                  style={{
                    height: 12,
                    flex: 6,
                    marginRight: 200,
                    opacity: 0.4,
                    borderRadius: 90,
                  }}
                  width={20}
                />
                <PlaceholderLine
                  style={{
                    marginRight: 30,
                    height: 12,
                    opacity: 0.4,
                    borderRadius: 90,
                  }}
                  width={15}
                />
              </View>
            </Placeholder>
            <Placeholder Animation={Fade}>
              <View style={{
                flexDirection: 'row',
                padding: 10,
                marginHorizontal: 15,
                backgroundColor: '#FAFAFA',
                borderRadius: 5,
                height: 100,
              }}>
                <PlaceholderMedia
                  size={80}
                  style={{
                    borderRadius: 10,
                    height: 80,
                    width: 140,
                    opacity: 0.3,
                    flex: 1,
                  }}
                />
                <View style={{ flex: 2, marginHorizontal: 12, }}>
                  <PlaceholderLine width={80} style={{ opacity: 0.4 }} />
                  <PlaceholderLine style={{ opacity: 0.3 }} />
                  <PlaceholderLine style={{ opacity: 0.3 }} width={30} />
                </View>
              </View>
            </Placeholder>
          </>
        ) : (
          <Carousel
            data={data}
            inactiveSlideScale={10}
            enableSnap={true}
            layoutCardOffset={10}
            enableMomentum={true}
            renderItem={renderItem}
            sliderWidth={SliderWidth}
            itemWidth={SliderWidth}
          />
        )
      }

    </>
  );
};

export default Carousell;
