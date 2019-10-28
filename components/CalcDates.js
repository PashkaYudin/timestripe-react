import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class CalcDates extends React.Component {

    render() {

        let items = [];
        let cur = 2019;
        let s = this.props.born;

        for(let j = 0; j < 80; j++){
            
            if(j > 60) {
                if(s+j < cur) items.push(<Text key={j} style={styles.crossitem}> {s + j} </Text>)
                    else items.push(<Text key={j} style={[styles.item, {color: `rgba(99, 110, 114, ${(80 - j)/20})`}]}> {s + j} </Text>)
            }
            else{
                if(s+j < cur) items.push(<Text key={j} style={styles.crossitem}> {s + j} </Text>)
                    else if (s+j == cur) items.push(<Text key={j} style={styles.curitem}> {s + j} </Text>)
                        else items.push(<Text key={j} style={styles.item}> {s + j} </Text>)
            }
        }

        return (
            <View style={styles.wrapper}>
                {items}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        alignContent: 'stretch'
    },
    item: {
        width: '20%',
        color: '#636e72',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center'        
    },
    crossitem: {
        width: '20%',
        color: '#636e72',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center',    
        textDecorationLine: 'line-through'    
    },
    curitem: {
        backgroundColor: '#f9ca24',
        color: '#fff',
        width: '20%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center'
    }
})