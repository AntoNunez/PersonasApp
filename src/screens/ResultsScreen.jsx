import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,

} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Icon  from 'react-native-vector-icons/Ionicons';
import {homeStyle} from '../theme/homeTheme';


export const ResultsScreen = ({navigation})=> {
  const [labelData, setLabelData] = useState([]);
  const [totalData, setTotalData] = useState([])


  const data = {
    labels: labelData,
    datasets: [
      {
        data: totalData,
      },
    ],
  };

  const getPerson = async () => {
    axios
      .get('http://localhost:8080/api/persons')
      

      .then(resp => {
        console.log(resp.data);
        let arr2= [];
        const key = 'area';
        resp.data.forEach((x) => {
          if (
            arr2.some(val => {
              return val[key] == x[key];
            })
          ) {
            arr2.forEach(k => {
              if (k[key] === x[key]) {
                k['total']++;
              }
            });
          } else {
            let a = {};
            a[key] = x[key];
            a['total'] = 1;
            arr2.push(a);
          }
        });
        let labels = [];
        let totales = [];
        let arr = Object.keys(arr2).map(function (key) {
          let temp = Object.values(arr2[key])
          labels.push(temp[0])
          totales.push(temp[1])
        });
          setLabelData(labels)
          setTotalData(totales)
        
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#52b4c7'}}>
      <ScrollView>
        <Text style={styles.resultsTitle}>Resultados</Text>

        <BarChart
          data={data}
          width={Dimensions.get('screen').width - 16}
          height={420}
          yAxisLabel={'Pers-'}
          chartConfig={{
            backgroundGradientFrom: 'skyblue',
            backgroundGradientTo: 'grey',
            decimalPlaces: 0,
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            paddingHorizontal: 8,
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={homeStyle.buttonReturn}
        onPress={() => navigation.replace('HomeScreen')}>
          <Icon
          name='arrow-back-outline'
          size={40}
          color='white'
          />
       {/*  <Text style={homeStyle.buttonText}>Volver</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 30,
  },
  resultsTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 60,
    paddingLeft: 75,
  },
});
