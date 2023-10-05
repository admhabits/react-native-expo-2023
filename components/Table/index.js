/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView, StyleSheet, View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export default function TableComponent(props) {
  const {
    head,
    dataTable,
    flexArr,
    tableHeadColor,
    tableHeadTextColor,
    isTotalDataShow,
    setTotalDataShow,
    isSearch,
    setDataTable
  } = props;
  //  useEffect(() => {
  //   setDataTable(dataTable)
  //  }, [])

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#fff' }}>
        <Row
          data={head}
          style={{ ...styles.HeadStyle, backgroundColor: tableHeadColor}}
          textStyle={{ ...styles.TableTextHeader, color: tableHeadTextColor}}
          flexArr={flexArr}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Rows data={dataTable.slice(0, isTotalDataShow)} textStyle={{ ...styles.TableText }} flexArr={flexArr} />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => setTotalDataShow(isTotalDataShow + 10)}
              style={{
                backgroundColor: '#0089EC',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 30,
                  color: '#fff',
                  fontSize: 10,
                  display: isSearch !== '' ? 'none' : null
                }}>
                Load More
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Table>

    </View>
  );
}

TableComponent.defaultProps = {
  tableHeadColor: '#E6E7E9',
  tableHeadTextColor: '#000',
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  contentContainer: {
    paddingVertical: 15,
  },
  HeadStyle: {
    height: 30,
    marginVertical: 0, 
  },
  TableTextHeader: { 
    paddingHorizontal: 8, 
    fontSize: 12, 
    fontWeight: '800', 
  },
  TableText: {
    paddingHorizontal: 3,
    fontSize: 10,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
});
