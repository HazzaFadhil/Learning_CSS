import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <Text style={styles.title}>My Profile</Text>
                <Text>Informasi Profil Mahasiswa</Text>
            </View>

            <View style={styles.cardProfile}>
                <Image
                    source={require('../assets/myidol.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Fadhil Hazza Iswadinata</Text>
                <Text style={styles.profileName}>4112755201250124</Text>
                <View style={styles.cardProfileInfo}>
                    <Text style={styles.profileEmail}>dhilhazza@gmail.com</Text>
                    <Text style={styles.profileEmail}>Teknik Informatika</Text>
                </View>
            </View>

            <View style={styles.cardProfile2}>
                <Image
                    source={require('../assets/bahasa.png')}
                    style={styles.profileImage2}
                />
                <Text style={styles.profileName2}>Bahasa</Text>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'left',
        alignItems: 'left',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    safearea: {
        padding: 20,
        gap: 20,
    },
    
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        alignSelf: 'center',
    },

    profileImage2: {
        width: 30,
        height: 30,
        borderRadius: 20,
        alignSelf: 'left',
    },
    
    cardProfile2: {
        flexDirection: '',
        backgroundColor: '#f9f9f9',

    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',

    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        flexDirection: 'row',
    },

    profileName2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'left',
    },

    cardProfileInfo: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },

    cardProfile: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
        gap: 5,
    }
})