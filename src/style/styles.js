import { StyleSheet } from "react-native"


export const Styles = StyleSheet.create({
    entryBody: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },

    commonBody: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },

    entryImage: {
       width: '30%',
       height: '18%',
       marginBottom: '5%'
    },

    taskTango: {
        color: 'white',
        marginBottom: '5%',
        fontSize: 50,
        fontStyle: "italic",
        fontWeight: "bold",
        color: '#302b2b'
    },

    entryButton: {
        backgroundColor: '#302b2b',
        padding: 12,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    
    entryButtonText: {
        color: 'white',
    },

    scrollviewStyle: {
        // flex: 1,
        width: 350,
        // backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: '5%',
        paddingBottom: '5%',
    },

    cardLayout: {
        width: "100%",
        height: 110,
        backgroundColor: '#f7dcb2',
        marginBottom: '6%',
        borderRadius: 8,
        borderLeftWidth: 15,
        // borderLeftColor: 'red',

        // shadow
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 4,
    },

    cardTitle: {
        fontSize: 25,
        marginLeft: '5%',
        marginTop: "3%",
        fontWeight: "bold",
        color: "#54514d",
    },

    cardTime: {
        fontSize: 15,
        marginLeft: '6%',
        marginTop: "3%",
        fontWeight: "bold",
        color: "#8c8780",
    }
})