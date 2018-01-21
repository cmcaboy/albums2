import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// If you are using more than a few items out of props, it is best convention to descructure

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {headerContentStyle, thumbnailContainerStyle, thumbnailStyle, imageStyle} = styles;
    
    return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                {/* you must use source for image */}
                <Image
                    style={thumbnailStyle} 
                    source={{uri:thumbnail_image}}
                />
            </View>
            <View style={headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        
        <CardSection>
            <Image style={imageStyle} source={{uri: image}}/>
        </CardSection>

        <CardSection>
            {/* Linking sends the user to another app or url page. */}
            <Button onPress={() => Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardSection>
    </Card>
)
}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    // We can use a trick to omptimize the with of an image or div
    // Setting width of null and flex of 1 performs this trick. 
    // It takes up the full width of the device.
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
}

export default AlbumDetail;