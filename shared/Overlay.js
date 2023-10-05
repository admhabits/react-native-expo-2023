import React, { useState, useEffect } from 'react';
import { View, useWindowDimensions, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Overlay, Icon } from 'react-native-elements';
import { BaseUrl } from '../utils/Constants';
import { DownloadFunc } from 'shared';

const OverlayTable = ({ toggle, visible, title, item, id, fileName }) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const [itemData, setItemData] = useState([])
    const isDownload = id == 'undefined' || id == null ? false : true
    const theme = {
        background: '#f5f2f2',
        blue: '#0089EC',
    }
    useEffect(()=> {
        setItemData(item)
    }, [])
    useEffect(()=> {
        setItemData(item)
        console.log("CHECK ITEM OVERLAY", item)
    }, [id])
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={toggle}
        >

            <View style={{
                width: width / 1.4,
                height: height / 2,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text
                        style={{
                            backgroundColor: "#2089dc",
                            color: "white",
                            textAlign: "center",
                            padding: 10,
                            textTransform: 'uppercase',
                        }}
                    >
                        {title}
                    </Text>
                    {
                        itemData?.map((val, key) => {
                            if (val.code == 'l') {
                                return (
                                    <View style={{ ...styles.table, backgroundColor: key % 2 === 0 ? 'white' : theme.background }} key={key}>
                                        <Text style={{
                                            flex: 1.3, fontSize: 10, fontFamily: 'monserrat', textTransform: 'uppercase',
                                            borderRightWidth: 2,
                                            borderRightColor: '#fff',
                                            marginRight: 5,
                                        }}>{val.label}</Text>
                                        <Text style={{ textTransform: 'uppercase', flex: 2, fontSize: 10, color: '#0089EC' }}>
                                            {
                                                isDownload === false || fileName == "-" || val.value == '' ? "Tidak Tersedia" : fileName.length > 23 ? fileName.slice(-23) : fileName
                                            }
                                        </Text>
                                    </View>
                                )

                            } else {
                                return (
                                    <View style={{ ...styles.table, backgroundColor: key % 2 === 0 ? 'white' : theme.background }} key={key}>
                                        <Text style={{
                                            flex: 1.3, fontSize: 10, fontFamily: 'monserrat', textTransform: 'uppercase',
                                            borderRightWidth: 2,
                                            borderRightColor: '#fff',
                                            marginRight: 5,
                                        }}>{val.label}</Text>
                                        <Text style={{
                                            textTransform: 'uppercase', flex: 2, fontSize: 10
                                        }}
                                        >
                                            {val.value ? val.value : '-'}
                                        </Text>
                                    </View>
                                )
                            }

                        })
                    }

                </ScrollView>
            </View>

            <TouchableOpacity
                onPress={() => {
                    toggle(!visible);
                    // console.log(isDownload)
                    // setItemData([]);
                    const baseDownload = `${BaseUrl}/storage/portal/documents/post/${id}/${fileName}`;
                    isDownload && fileName != '-' && fileName != '' &&
                        (DownloadFunc(baseDownload, fileName))
                }}
                style={{
                    backgroundColor: isDownload === true && fileName != '-' && fileName != '' ? "#2089dc" : 'grey',
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Icon
                    name={ isDownload === true && fileName != '-' && fileName != '' ? 'cloud-download' : 'close-circle-outline'}
                    type='ionicon'
                    color='#fff'
                    size={24}
                    style={{ marginRight: 5 }}
                />
                <Text style={{
                    fontSize: 12,
                    color: "white",
                    textAlign: "center",
                    textTransform: 'uppercase'
                }}>
                    {
                        isDownload === true && fileName != '-' && fileName != '' ? "Unduh Lampiran" : "Tutup"
                    }
                </Text>
            </TouchableOpacity>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    table: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default OverlayTable;