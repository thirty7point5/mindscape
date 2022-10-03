import React, { useRef, useState } from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import { Indicator } from './indicator'
import Button from '../../components/button'
import { fonts } from '../../utils/fonts'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const WalkThroughComponent = ({
    data = [
        { img: require('../../assets/images/walkthrough1.png'), text: 'Wellbeing Management is the most significant skill of our times..' },
        { img: require('../../assets/images/walkthrough2.png'), text: 'This 175 day program will teach you 5 virtues providing life long access to empowering tools.' },
        { img: require('../../assets/images/walkthrough3.png'), text: 'Scientifically designed to enable you to explore the best version of yourself' }
    ],
    navigation

}) => {

    const slider = useRef(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const onViewRef = React.useRef(({ viewableItems }) => {
        // Use viewable items in state or as intended
        if (viewableItems.length > 0) {
            let index = viewableItems[0].index
            // onItemChanged(viewableItems[0].item)
            setSelectedIndex(index)
        }
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                initialScrollIndex={selectedIndex}
                // onScrollToIndexFailed={info => {
                //     const wait = new Promise(resolve => setTimeout(resolve, 500));
                //     wait.then(() => {
                //     flatList.current?.scrollToIndex({ index: info.index, animated: true });
                //     });
                // }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flex: 1, width: width }}>
                            <Image source={item.img} style={{ height: "68%", width: width }} resizeMode="cover" />
                            <View style={{ padding: 30 }}>
                                <Text style={{ textAlign: 'center', color: "#706F93", fontFamily: fonts.regulatorLight, fontSize: 22 }}>
                                    {item.text}
                                </Text>
                            </View>
                            <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
                                <Button
                                    buttonStyle={{ borderColor: "#afafb7" }}
                                    onPress={() => navigation.navigate('SignUp')} title={"SIGN UP"} textStyle={{ color: '#a4a4ae', fontFamily: fonts.OptimaRegular}} />
                            </View>
                        </View>
                    )
                }}
            />
            <Indicator data={data} currenIndex={selectedIndex} />

        </View>
    )
}