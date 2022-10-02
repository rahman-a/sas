import React from 'react'
import HeaderContextProvider from '../../context/Header-Context'
import Header from './Header'

const MainHeader: React.FC = () => (
  <HeaderContextProvider>
    <Header />
  </HeaderContextProvider>
)

export default MainHeader
