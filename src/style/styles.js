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
        //backgroundColor: 'green'
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
        //flex: 1,
        width: '90%',
        //backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: '5%',
        paddingBottom: '5%',
    },

    cardLayout: {
        flex: 0,
        flexDirection: 'row',
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
    },

    cardDeleteIcon: {
        marginLeft: '6%',
        marginTop: '5%',
    },

    cardEmptyContainer: {
        flexGrow: 1,
    },

    cardImgContainer: {
        //backgroundColor: 'red',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '3%'
        
    },

    cardImg: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    addIconContainer: {
        position: 'absolute',
        zIndex: 9999,
        backgroundColor: 'orange',
        width: 70,
        height: 70,
        bottom: 50,
        right: 30,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 4,
    },

    addTaskHeroImg: {
        width: '100%',
        height: 170,
        marginBottom: '6%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    addTaskRows : {
        flex : 0,
        flexDirection: 'column',
        width: '100%',
        //height: 150,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    
    addTaskInputs: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 8,
        width: '70%',
        marginBottom: '5%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 2,
    },

    colourSelector: {
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '70%',
        height: '10%',
        borderRadius: 8,
        // marginBottom: '2.5%',
        // marginTop: '2.5%',
    },

    colourSelectorColour: {
        flex: 1,
        elevation: 4,
        //height: '100%',
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addTaskButtons: {
        backgroundColor: '#d67c0d',
        padding: 8,
        width: '70%',
        borderRadius: 8,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },

    addTaskImg: {
        width: '70%',
        height: 200,
        marginTop: '5%',
        borderRadius: 8,
    },

    addTaskButtonText: {
        fontWeight: "bold",
        color: 'white',
    },

})