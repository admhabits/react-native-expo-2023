import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import PdfThumbnail from './lib';
const PdfThumb = async () => {
    const [viewImage, setViewImage] = React.useState();
    const createThumb = async () => {
        const { File, error, imageUrl } = await PdfThumbnail(
            'https://portaldev.hubla.dephub.go.id/storage/documents/post/662/Vp1SUOnlsQl2X5paR4kTx4F8kXpCb41PAAHV0esB.pdf',
            { // thumb image config
                fileName: 'mythumbimage.png', // thumb file name
                height: 200, // image height
                width: 200, // image width
                pageNo: 1  // pdf page number
            }
        );
       
        if (!error) {
            setViewImage(imageUrl);
        }
    };
    useEffect(() => {
        createThumb()
        console.log("FILE PDF", File, error, imageUrl);
    }, []);

    return (
        <>

            <Image source={viewImage} />
            {/* <View><Text>{'hi'}</Text></View> */}
        </>
    );
};

export default PdfThumb