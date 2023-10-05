import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder';

const CardBerita = props => {
  const { image, length} = props;

  return (
    <TouchableOpacity
      onPress={e =>
        Linking.openURL('https://www.instagram.com/djplkemenhub151/?hl=id')
      }>
      {
        length === 0 ? (
          <Placeholder Animation={Fade}>
            <PlaceholderMedia style={{ ...styles.outer, opacity: 0.4 }} />
          </Placeholder>
        ) : (
          <Image source={image} style={styles.outer} />
        )
      }

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: 120,
    height: 120,
    marginHorizontal: 2,
  },
});

export default CardBerita;
