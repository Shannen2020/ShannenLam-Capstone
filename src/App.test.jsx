import {screen, render} from '@testing-library/react'
import App from './App'

describe('App Component', ()=>{
    it("should render correctly", () => {
        //Arrange
        render(<App />)

        //Act

        //Assert
        expect(screen.getByText('Financial Dashboard')).toBeInTheDocument()
    })
})