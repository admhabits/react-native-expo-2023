/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeadTable = props => {
  const {data, textColor, backgroundColor} = props;
  return (
    <View style={styles.head}>
      {data?.map((item, i) => (
        <View
          key={i}
          style={{
            width: item.width,
            borderColor: '#fff',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            padding: 2,
          }}>
          <Text
            style={{
              marginLeft: 2,
              marginHorizontal: 1,
              fontSize: 9,
              color: textColor,
              textTransform: 'uppercase'
            }}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    marginHorizontal: 15,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default HeadTable;
