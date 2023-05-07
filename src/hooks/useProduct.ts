import { gql, useQuery } from "@apollo/client";

// Interfaces
import { Product } from "@interfaces";

const PRODUCTS_QUERY = (id: number) => gql`
    query {
        product(id: ${id}) {
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

const useProduct = (id: number) =>
    useQuery<{ product: Product }>(PRODUCTS_QUERY(id));

export default useProduct;
