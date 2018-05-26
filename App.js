import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.1756822,
      longitude: 115.1175816,
      latitudeDelta: 0.22,
      longitudeDelta: 0.21,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.142070,
          longitude: 115.096391
        },
        title: 'Air Terjun Tembok Barak',
        subtitle: 'Gang Cengkeh, Sambangan, Sukasada, Sambangan, Kec. Buleleng, Kabupaten Buleleng, Bali 81161'
      },
      {
        key:2,
        latlng: {
          latitude:-8.117259,
          longitude: 115.161429
        },
        title: 'Air Terjun Menyali',
        subtitle: 'Menyali, Sawan, Kabupaten Buleleng, Bali 81171'
      },
      {
        key:3,
        latlng: {
          latitude:-8.163638,
          longitude: 115.106392
        },
        title: 'Air Terjun Aling-Aling',
        subtitle: 'Jalan Raya Desa Sambangan, Sambangan, Sukasada, Sambangan, Sukasada, Kabupaten Buleleng, Bali 81161'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.184105,
          longitude: 115.117730
        },
        title: 'Air Terjun Jembong',
        subtitle: 'Unnamed Rd 81161 Indonesia, Ambengan, Sukasada, Kabupaten Buleleng, Bali 81161'
      },
      {
        key:5,
        latlng: {
          latitude:-8.152099,
          longitude: 115.117730
        },
        title: 'Air Terjun Wana Ayu',
        subtitle: 'Padangbulia, Sukasada, Kabupaten Buleleng, Bali 81161'
      },
      {
        key:6,
        latlng: {
          latitude:-8.182557,
          longitude: 115.136159
        },
        title: 'Air Terjun Gitgit',
        subtitle: 'Jl. Raya Bedugul - Singaraja, Gitgit, Sukasada, Kabupaten Buleleng, Bali 81161'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Air Terjun di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Angga Juliasta </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
