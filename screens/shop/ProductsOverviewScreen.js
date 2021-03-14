import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = (props) => {
    /**
     * l'hook useSelector recupera dallo stato di redux i prodotti disponbili da mostrare nella schermata
     * nel componente Flatlist
     */
    const products = useSelector((state) => {
        return state.products.availableProducts;
    });
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductItem
                    title={itemData.item.title}
                    price={itemData.item.price}
                    image={itemData.item.imageUrl}
                    onViewDetails={() =>
                        props.navigation.navigate("ProductDetail", {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title,
                        })
                    }
                    onAddToCart={() => {}}
                />
            )}
        />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: "All Products",
};

export default ProductsOverviewScreen;
