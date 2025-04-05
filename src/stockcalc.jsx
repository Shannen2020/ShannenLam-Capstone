const ProfitLoss = ({ purchasePrice, currentPrice, quantity }) => {
    const buy = parseFloat(purchasePrice)
    const current = parseFloat(currentPrice)
    const qty = parseFloat(quantity)

    const net = (current - buy) * qty
    const isProfit = net > 0

    return (
        <p style={{ color: isProfit ? 'green' : 'red' }}>
        <strong>Profit/Loss:</strong> ${net.toFixed(2)}
        </p>
    );
    };

export default ProfitLoss;