import { Product } from "../../src/entities/Product";
import { ProductDataBuilder } from "./ProductDataBuilder";

export class ProductMotherObject {
    static valid(): Product {
        return ProductDataBuilder
                .aProduct()
                .build()
    }

    static withInvalidId(): Product {
        return ProductDataBuilder
                .aProduct()
                .withInvalidId()
                .build()
    }

    static withInvalidName(): Product {
        return ProductDataBuilder
                .aProduct()
                .withInvalidName()
                .build()
    }

    static withInvalidPrice(): Product {
        return ProductDataBuilder
                .aProduct()
                .withInvalidPrice()
                .build()
    }

    static withInvalidCategory(): Product {
        return ProductDataBuilder
                .aProduct()
                .withInvalidCategory()
                .build()
    }
}