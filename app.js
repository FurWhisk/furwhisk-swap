import React from 'react';

const App = () => {
  const handleConnectWallet = () => {
    alert('WalletConnect coming soon, meow!');
  };

  const handleBuyNow = () => {
    window.open("https://jup.ag/swap/SOL-FurWhisk", "_blank");
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '60px', fontFamily: 'sans-serif' }}>
      <h1>FurWhisk Swap</h1>
      <p>Connect your wallet, swap tokens, and earn XP!</p>
      <button onClick={handleConnectWallet} style={btnStyle}>Connect Wallet</button>
      <button onClick={handleBuyNow} style={btnStyle}>Buy $FurWhisk</button>
    </div>
  );
};

const btnStyle = {
  margin: '10px',
  padding: '12px 24px',
  fontSize: '16px',
  borderRadius: '8px',
  background: '#000',
  color: '#fff',
  cursor: 'pointer'
};

export default App;
