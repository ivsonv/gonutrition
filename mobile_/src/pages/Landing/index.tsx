import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {

    }, []);

    function handleNavigateToGiveClassesPage() {

    }

    function handleNavigateToStudyPages() {

    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Agendar</Text>
                </RectButton>

                <RectButton
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                {totalConnections > 0 ? `Total de ${totalConnections} conexões já realizadas` : `Seja o primeiro a se conectar`}
                {' '} <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;