import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
type Props = {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      {children}
    </View>
  )
}

export default MainLayout