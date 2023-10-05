import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../../utils/Constants';
import axios from 'axios';

function LaluLintas() {
  const { width } = useWindowDimensions();
  const [source, setSource] = useState({ html: `<p style='align-items: center;'> Loading...</p>` })

  const Fetching = () => {
    axios.get(`${BaseUrl}/api/public/unit-kerja/direktorat-lalu-lintas-angkutan-laut`).then((response) => {
      const { content } = response.data.data?.listDirektoratLaluLintasAngkutanLaut[0];
      console.log("CHEKING lalu Lintas Angkatan Laut", JSON.stringify(content, null, 3));
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

export default LaluLintas;