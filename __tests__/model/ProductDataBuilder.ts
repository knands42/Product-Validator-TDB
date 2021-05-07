import { Product } from "../../src/entities/Product";

export class ProductDataBuilder {
    private readonly productData = {
        id: '000001',
        name: 'computer',
        price: 1000,
        category: 'electronic'
    }

    static aProduct(): ProductDataBuilder {
        return new ProductDataBuilder()
    }

    withInvalidId(): ProductDataBuilder {
        this.productData.id = '1'

        return this
    }

    withInvalidName(): ProductDataBuilder {
        this.productData.name = 'abc123'

        return this
    }

    withInvalidPrice(): ProductDataBuilder {
        this.productData.price = 999999

        return this
    }

    withInvalidCategory(): ProductDataBuilder {
        this.productData.category = 'computers'

        return this
    }

    build(): Product {
        return new Product(
            this.productData.id,
            this.productData.name,
            this.productData.price,
            this.productData.category
        )
    }
}