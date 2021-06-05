import React from 'react'
import UserList from './components/UserList/UserList'
import styled from 'styled-components'
import './App.css'

const StyledMainContainer = styled.div`

`

const App = () => {
  return (
    <React.Fragment>
      <StyledMainContainer>
        <UserList />
      </StyledMainContainer>
    </React.Fragment>
  )
}

export default App


