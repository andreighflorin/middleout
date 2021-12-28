import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Users from '../components/Users'


export default function List() {

  const [url, setUrl] = useState('https://randomuser.me/api/?results=12')
  const {data: users, isLoading} = useFetch(url)

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
        {isLoading && <h2>Loading...</h2>}
        {users && users.results.slice(0,12).map(item => (
          <div className="col-sm-6 col-md-3" key={item.login.uuid}><Users id={item.login.uuid} image={item.picture.large}/></div>
        ))}
        </div>
      </div>
    </div>
  )
}