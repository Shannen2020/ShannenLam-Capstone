import {screen, render, fireEvent, rerender} from '@testing-library/react'
import {describe, it, expect} from 'vitest'
import ProfitLoss from './stockcalc'

describe('StockCalc component', () => {
    it('should calculate profit/loss correctly', () => {
        // Arrange
        render(
            <ProfitLoss purchasePrice='99' currentPrice='299' quantity='1' />
            )

        //Assert
        const strongEl = screen.getByText('Profit/Loss:', { selector: 'strong' })
        const parentP = strongEl.closest('p')
        expect(parentP).toHaveTextContent('Profit/Loss: $200.00')
        expect(parentP).toHaveStyle({color: 'rgb(0, 128, 0)'});
    })
})



