import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <Text style={styles.title}>Home Page</Text>
            </View>
            <View style={styles.cardheader}>
                <Text style={styles.cardtitle}>Hallo Fadhil</Text>
                <Text style={styles.cardtext}>Selamat datang di halaman Home</Text>
            </View>
            <View style={styles.Aktifitas}>
                <Text style={styles.cardtitle}>Aktifitas</Text>

                <View style={styles.cardAktifitas}>
                    <Text style={styles.cardtitle}>Tugas</Text>
                    <Text style={styles.cardtextNumber}>3</Text>
                    <Text style={styles.cardtext}>Tugas belum selesai</Text>
                </View>

                <View style={styles.cardAktifitas}>
                    <Text style={styles.cardtitle}>Jadwal</Text>
                    <Text style={styles.cardtextNumber}>2</Text>
                    <Text style={styles.cardtext}>Jadwal hari ini</Text>
                </View>

                <View style={styles.cardAktifitas}>
                    <Text style={styles.cardtitle}>Absensi</Text>
                    <Text style={styles.cardtextNumber}>100%</Text>
                    <Text style={styles.cardtext}>Semua mata kuliah</Text>
                </View>

                <View style={styles.cardAktifitas}>
                    <Text style={styles.cardtitle}>Pengumuman</Text>
                    <Text style={styles.cardtextNumber}>1</Text>
                    <Text style={styles.cardtext}>Pengumuman terbaru</Text>
                </View>
            </View>
        </SafeAreaView>
    )
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

    cardheader: {
        padding: 20,
        backgroundColor: '#00a2ff',
        borderRadius: 10,

    },
    cardtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardtext: {
        fontSize: 14,
    },
    cardtextNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00a2ff',
    },

    cardAktifitas: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }

})