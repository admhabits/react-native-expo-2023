import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../../utils/Constants';
import axios from 'axios';

function Kepelabuhan() {
  const { width } = useWindowDimensions();
  const [source, setSource] = useState({ html: `<p style='align-items: center;'> Loading...</p>` })

  const Fetching = () => {
    axios.get(`${BaseUrl}/api/public/unit-kerja/direktorat-kepelabuhanan`).then((response) => {
      const { content } = response.data.data.listDirektoratKepelabuhanan[0];
      console.log("CHEKING Direktorat Kepelabuhan data", JSON.stringify(content, null, 3));
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

export default Kepelabuhan;