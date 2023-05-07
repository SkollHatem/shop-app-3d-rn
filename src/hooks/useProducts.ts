import { gql, useQuery } from "@apollo/client";

// Interfaces
import { Product } from "@interfaces";

const PRODUCTS_QUERY = gql`
    query {
        products {
            id
            name
            group
            description
            img
            price
            medias {
                id
                url
            }
        }
    }
`;

const useProducts = () =>
    useQuery<{ products: Product[] }>(PRODUCTS_QUERY, { pollInterval: 1000 });

export default useProducts;
