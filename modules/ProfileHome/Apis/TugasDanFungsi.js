import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../../utils/Constants';
import axios from 'axios';

function TugasDanFungsi() {
  const { width } = useWindowDimensions();
  const [source, setSource] = useState({ html: `<p style='align-items: center;'> Loading...</p>` })

  const Fetching = () => {
    axios.get(`${BaseUrl}/api/public/tugas-dan-fungsi-98`).then((response) => {
      const { content } = response.data.data?.ListTugasDanFungsi[0];
      console.log("CHEKING Tugas Dan Fungsi", JSON.stringify(content, null, 3));
      setSource({ html: content })
    })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    Fetching();
  }, [])

  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <>
          <RenderHtml
            contentWidth={width}
            source={source}
          />
        </>
      </ScrollView>
    </>
  );
}

export default TugasDanFungsi;