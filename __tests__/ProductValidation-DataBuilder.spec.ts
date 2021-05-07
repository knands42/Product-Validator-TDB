import { describe, it } from 'mocha'
import { expect } from 'chai'

import { ProductDataBuilder } from './model/ProductDataBuilder'
import { ProductValidator } from '../src'

describe('Test Data Builder', () => {
    it('shouldn\'t return error with valid product', () => {
        const product = ProductDataBuilder.aProduct().build()
        const result = new ProductValidator(product).execute()

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })

    describe('Product Validation Rules', () => {
        it('Should return an object error when creating a product with invalid id', () => {
            const product = ProductDataBuilder.aProduct().withInvalidId().build()
            const result = new ProductValidator(product).execute()
    
            const expected = {
                errors: ['id: invalid length, current [1] expected to be between 2 and 20'],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
    
        })
        it('Should return an object error when creating a product with invalid name', () => {
            const product = ProductDataBuilder.aProduct().withInvalidName().build()
            const result = new ProductValidator(product).execute()
    
            const expected = {
                errors: ['name: invalid value, current [abc123] expected to have only words'],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
        it('Should return an object error when creating a product with invalid price', () => {
            const product = ProductDataBuilder.aProduct().withInvalidPrice().build()
            const result = new ProductValidator(product).execute()
    
            const expected = {
                errors: ['price: invalid length, current [999999] expected to be between 1 and 1000'],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
        it('Should return an object error when creating a product with invalid category', () => {
            const product = ProductDataBuilder.aProduct().withInvalidCategory().build()
            const result = new ProductValidator(product).execute()
    
            const expected = {
                errors: ['category: invalid value, current [computers] expected to be electronic or organic'],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
    })
})