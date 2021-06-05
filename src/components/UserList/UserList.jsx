import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import UserCard from '../UserCard/UserCard'

const StyledMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const UserList = () => {

    const [ userList, setUserList ] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUserList(response.data))
    }, [setUserList])
    console.log(userList)

    return (
        <React.Fragment>
            <StyledMainContainer>
               { userList.map(e => {
                   return (
                       <UserCard key={e.id} name={e.name} id={e.id} address={e.address.street} email={e.email} phone={e.phone} username={e.username} website={e.website} />
                   )
               }) }
            </StyledMainContainer>
        </React.Fragment>
    )
}

export default UserList
