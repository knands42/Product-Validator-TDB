import { Product } from './entities/Product'

type ProductValidatorResponse = {
    result: boolean
    errors: string[]
}

export class ProductValidator {
    private readonly errors: string[] = []
    
    constructor(
        private readonly product: Product,
    ) {}

    execute(): ProductValidatorResponse {
        !(this.product.id.length >= 2 && this.product.id.length <= 20) &&
            this.errors.push(`id: invalid length, current [${this.product.id}] expected to be between 2 and 20`);
    
        (/\W|\d/.test(this.product.name)) &&
            this.errors.push(`name: invalid value, current [${this.product.name}] expected to have only words`)
    
        !(this.product.price >= 1 && this.product.price <= 1000) &&
            this.errors.push(`price: invalid length, current [${this.product.price}] expected to be between 1 and 1000`)
    
        !(['electronic', 'organic'].includes(this.product.category)) &&
            this.errors.push(`category: invalid value, current [${this.product.category}] expected to be electronic or organic`)
    
        return {
            result: this.errors.length === 0,
            errors: this.errors
        }
    }
}
