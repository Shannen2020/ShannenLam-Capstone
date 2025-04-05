import { useEffect, useState } from 'react';
import ProfitLoss from './stockcalc';

const API_KEY = "ULJSLSEWNJP2EIMI"

const StockDropdown = () => {
    const [symbol, setSymbol] = useState("")
    const [qty, setQty] = useState("")
    const [price, setPrice] = useState("")
    const [currentPrice, setCurrentPrice] = useState("")

    useEffect(() => {
        if (!symbol) return;

        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo")
        // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
        .then((response) =>  response.json())
        .then((data) => {
            const fetchedPrice = data["Global Quote"]["05. price"];
            if (fetchedPrice) {
                setCurrentPrice(parseFloat(fetchedPrice).toFixed(2));
            }
            else {
                setCurrentPrice("Not available");
            }
        })
        .catch((error)=> {
            console.error("Fetch error", err);
            setCurrentPrice("Not available");
        });
    }, [symbol]);


    return (
        <div className="container">
            <h1 className = 'title'>Financial Dashboard</h1>
            <div className = 'input-group'>
            <input
            type = 'text'
            placeholder='AAPL'
            value={symbol}
            onChange={(event)=>
                setSymbol(event.target.value.toUpperCase())}
            />
            <input
            type="number"
            placeholder='Qty'
            value={qty}
            onChange={(event)=> setQty(event.target.value)}
            />
            <input
            type='number'
            placeholder="Price/stock"
            value={price}
            onChange={(event)=>setPrice(event.target.value)}
            />

            <button>Add Stock</button>
            </div>

            <h2 className='subtitle'>Stock List</h2>
            {symbol && (
                    <div className='stock-card'>
                        <p><strong>Symbol:</strong> {symbol}</p>
                        <p><strong>Quantity:</strong> {qty}</p>
                        <p><strong>Purchase Price:</strong> {price}</p>
                        <p><strong>Current Price:</strong> {currentPrice}</p>
                        <ProfitLoss 
                        purchasePrice={price}
                        currentPrice={currentPrice}
                        quantity={qty}
                        />
                    </div>
                )}

            </div>
    );
};
export default StockDropdown