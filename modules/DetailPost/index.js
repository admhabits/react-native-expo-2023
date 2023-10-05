import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import { Header } from 'components'
import RenderHTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { BaseUrl } from '../../utils/Constants';
import { useSelector } from 'react-redux';

export default function DetailPost({ navigation, route }) {
    const { login } = useSelector((state) => state);
    const { width } = useWindowDimensions();
    const [detail, setDetail] = useState(null);
    const { baseURLPost, id, postMedias, title, postExcerpt, type } = route.params;
    console.log("GET POST BERITA ID", id)
    useEffect(() => {
        getDataDetail()
    }, [login?.data?.token])
    const getDataDetail = async () => {
        axios.get(`${BaseUrl}/api//public/detail?id=${id}`)
            .then(response => setDetail(JSON.parse(JSON.stringify(response?.data?.data?.content))))
            .catch(error => console.log('Error get detail post:' + error))
    }
    const RenderText = ({ response }) => {
        const matches = [];
        response.replace(/<p>(.*?)<\/p>/g, function () {
            //use arguments[0] if you need to keep <p></p> html tags
            matches.push(arguments[1]);
        });

        // get first paragraph
        const firstParagraph = (matches.length) ? matches[0] : ""
        return (
            <View style={{ width: width - 22, }}>
                <RenderHTML
                    contentWidth={width - 22}
                    source={{ html: response }}
                />
            </View>
        )
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{ background: 'white' }}>
                <Header
                    onPressBack={() => navigation.navigate('Home')}
                    type={'back'}
                    namePathBack={type == 'siaran' ? 'Siaran Pers' : 'Berita'}
                    justifyContentTitle="flex-start"
                />
                <View style={{ marginHorizontal: 15, marginTop: 30 }}>
                    <View style={styles.image}>
                        <Image
                            style={{ borderRadius: 10, width: '100%', height: 200, marginBottom: 20 }}
                            source={{
                                uri: baseURLPost
                            }}
                        />
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={{ ...styles.desc, width }}>
                        <Text style={styles.detail}>
                            {
                                type === 'berita' && detail !== null ? (
                                    <RenderText response={detail} />
                                ) :
                                    (
                                        <RenderText response={postExcerpt} />
                                    )
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '700',
    },
    image: {
        borderRadius: 10,
        width: '100%',
        height: 200,
        marginBottom: 20,
        backgroundColor: '#CACACA'

    },
    heading: {
        marginHorizontal: 0,
    },
    desc: {
        marginTop: 10,
    },
    detail: {
        fontSize: 11.5,
    }
})

