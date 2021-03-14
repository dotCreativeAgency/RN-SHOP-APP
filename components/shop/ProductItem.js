import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";

import Colors from "../../constants/Color";

/**
 * creo un componente prodotto da poter riutilizzare
 * @param {*} props
 * @returns
 */
const ProductItem = (props) => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>    
                <TouchableHighlight onPress={props.onViewDetails}>
                    <Image style={styles.image} source={{ uri: props.image }} />
                </TouchableHighlight>
            </View>
            <View style={styles.details}>
                <TouchableOpacity onPress={props.onViewDetails}>
                    <Text style={styles.title}>{props.title}</Text>
                </TouchableOpacity>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>

            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={props.onViewDetails}
                />
                <Button
                    color={Colors.primary}
                    title="Add to Cadt"
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 6,
        borderRadius: 10,
        backgroundColor: "white",
        height: 300,
        margin: 20,
    },
    details: {
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
    },
    price: {
        color: "red",
        fontSize: 14,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default ProductItem;
