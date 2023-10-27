import React, {useState} from "react";
import { View, Text, Image, Switch } from "react-native"
import styles from "./styles";
import ToggleSwitch from 'toggle-switch-react-native'


export default function Socials(){

    const [stateFacebook, setStateFacebook] = useState(false);

    const toggleSwitchFacebook = () => setStateFacebook(previousState => !previousState);

    const [state, setState] = useState(false);

    const toggleSwitch = () => setState(previousState => previousState);

    const offColor = '#A9A9A9'

    return(
        <View style={styles.boxTitle}>

            <View style={styles.MarginLogo}>

            <Image style={styles.Logo} source={require("D:/SCA/sca-app/src/assets/facebook-logo-blue-circle-large-transparent-png.png")}></Image>

            <Text style={styles.TextLogo}>Facebook</Text>

            <ToggleSwitch
                isOn={stateFacebook}
                onColor="#337FFF"
                offColor={offColor}
                onToggle={toggleSwitchFacebook}
                style={styles.Switch}
                />

            </View>

            <View style={styles.MarginLogoBody}>

            <Image style={styles.Logo} source={require("D:/SCA/sca-app/src/assets/instagram.png")}></Image>

            <Text style={styles.TextLogo}>Instagram</Text>

            <ToggleSwitch
                isOn={state}
                onColor="#F75274"
                offColor={offColor}
                onToggle={toggleSwitch}
                style={styles.Switch}
                />

            </View>
            
            <View style={styles.MarginLogoBody}>

            <Image style={styles.Logo} source={require("D:/SCA/sca-app/src/assets/x.png")}></Image>

            <Text style={styles.TextLogo}>X</Text>

            <ToggleSwitch
                isOn={state}
                onColor="#000000"
                offColor={offColor}
                onToggle={toggleSwitch}
                style={styles.Switch}
                />

            </View>

            <View style={styles.MarginLogoBody}>

            <Image style={styles.Logo} source={require("D:/SCA/sca-app/src/assets/spotify.png")}></Image>

            <Text style={styles.TextLogo}>Spotify</Text>

            <ToggleSwitch
                isOn={state}
                onColor="#1DB954"
                offColor={offColor}
                onToggle={toggleSwitch}
                style={styles.Switch}
                />

            </View>

            <View style={styles.MarginLogoBody}>

            <Image style={styles.Logo} source={require("D:/SCA/sca-app/src/assets/tiktok.png")}></Image>

            <Text style={styles.TextLogo}>TikTok</Text>

            <ToggleSwitch
                isOn={state}
                onColor="#000000"
                offColor={offColor}
                onToggle={toggleSwitch}
                style={styles.Switch}
                />

            </View>
            

        </View>
    );
}