import React, { useState, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    const button = noButtonRef.current;
    if (button) {
      const btnWidth = button.offsetWidth;
      const btnHeight = button.offsetHeight;

      const maxX = window.innerWidth - btnWidth;
      const maxY = window.innerHeight - btnHeight;

      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);

      button.style.position = 'absolute';
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  };

  return (
    <div className="App">
      <h1>
        Ozod san <span style={{ color: 'red' }}>Gey</span> misan
      </h1>
      <button onClick={() => setShowModal(true)}>Ha</button>
      <button
        ref={noButtonRef}
        onMouseEnter={moveNoButton}
        onTouchStart={moveNoButton} // 👈 Mobil uchun qo‘llab-quvvatlash
      >
        Yo'q
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Qabul qilindi 😁</h2>
            <button onClick={() => setShowModal(false)}>Yopish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
