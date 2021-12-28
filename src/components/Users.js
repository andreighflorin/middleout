import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export default function Users({id, image}) {
  const [url, setUrl] = useState(`https://random-data-api.com/api/users/random_user?id=${id}`)
  const { data: names } = useFetch(url, { type: 'GET' })

  const handleClick = (e) => {
    e.preventDefault();
    const cta = e.target;
    if (cta.classList.contains('btn-success')) {
      cta.classList.remove('btn-success');
      cta.classList.add('btn-danger');
    } else if (cta.classList.contains('btn-danger')) {
      cta.classList.remove('btn-danger');
      cta.classList.add('btn-success');
    }
  }

  return (
    <>
      {names &&
        <div className="card">
          <img className="card-img-top" src={image} alt={names.fist_name}></img>
          <div className="card-body">
            <h5 className="card-title"><strong>{names.first_name} {names.last_name}</strong></h5>
              <p className="card-text">{names.subscription.plan}</p>
                <a href="#" className="btn btn-success" onClick={(e) => handleClick(e)}>Click me</a>
          </div>
        </div>
      }
    </>
  )
}