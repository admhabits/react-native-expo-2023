import React, { useState, useEffect } from 'react';
import { useWindowDimensions, View, Text, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../../utils/Constants';
import axios from 'axios';

function Pejabat({ styles }) {
    const { width } = useWindowDimensions();
    const [content, setContent] = useState([])

    const Fetching = () => {
        axios.get(`${BaseUrl}/api/public/pejabat-djpl`).then((response) => {
            const { employeeResponse } = response.data.data.Employees;
            console.log("CHEKING PEJABAT Data", JSON.stringify(employeeResponse, null, 3));
            setContent(employeeResponse)
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
                    {
                        content.length === 0 && (
                            <RenderHtml
                                contentWidth={width}
                                source={{ html: `<p style='align-items: center;'> Loading...</p>` }}
                            />
                        )
                    }
                    {
                        content ? content.map((val, key) => (
                            <View key={key}>
                                <View style={styles.subPejabat}>
                                    <Image
                                        style={{ width: 72, height: 100 }}
                                        source={{ uri: val.photoUrl }}
                                        resizeMode={'cover'}
                                    />
                                    <View
                                        style={{
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <View>
                                            <Text style={{ fontSize: 9.5 }}>{val.nama}</Text>
                                            <View style={styles.linestylePejabat} />
                                            <Text style={{ fontSize: 9.5 }}>{val.pangkat}</Text>
                                            <View style={styles.linestylePejabat} />
                                            <Text style={{ fontSize: 9.5 }}>NIP {val.nip}</Text>
                                            <View style={styles.linestylePejabat} />
                                            {/* <Text style={{ fontSize: 12 }}>Jabatan</Text>
                                            <View style={styles.linestylePejabat} /> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.linestyleUnder} />
                                </View>
                            </View>
                        )) : (null)
                    }

                </>
            </ScrollView>
        </>
    );
}

export default Pejabat;