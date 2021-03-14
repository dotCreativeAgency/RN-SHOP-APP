import React from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    Button,
} from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Color";

const ProdutDetailScreen = (props) => {
    const productId = props.navigation.getParam("productId");

    const selectedProduct = useSelector((state) =>
        state.products.availableProducts.find((prod) => prod.id === productId)
    );
    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{ uri: selectedProduct.imageUrl }}
            />
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title="Add to cart"
                    onPress={() => {}}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>{selectedProduct.title}</Text>
                <Text style={styles.price}>
                    $ {selectedProduct.price.toFixed(2)}
                </Text>
                <Text style={styles.description}>
                    {selectedProduct.description}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        alignItems: "center",
        marginVertical: 10,
    },
    price: {
        color: "red",
        marginVertical: 10,
        fontSize: 18,
    },
    actions: {
        marginVertical: 10,
        alignItems: "center",
    },
    description: {
        fontSize: 16
    },
});

// (navData contiene gli stessi oggetti di props)
ProdutDetailScreen.navigationOptions = (navData) => {
    return {
        headerTitle: navData.navigation.getParam("productTitle"),
    };
};

export default ProdutDetailScreen;
