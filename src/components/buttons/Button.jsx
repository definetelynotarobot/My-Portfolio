import React from 'react'

const Button = ({ variant = 'primary', disabled, loading, onClick, children }) => {
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor:
      variant === 'primary' ? '#007bff' :
      variant === 'secondary' ? '#6c757d' :
      variant === 'danger' ? '#dc3545' :
      '#007bff',
    color: '#fff',
    opacity: disabled ? 0.6 : 1,
  }

  return (
    <button style={baseStyle} disabled={disabled} onClick={onClick}>
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
