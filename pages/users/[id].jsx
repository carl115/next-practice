"use client"

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://reqres.in/api/users/${params.id}`)
    const { data } = await res.json()
    const user = data
    return { props: { user } }
}

export default function user({ user }) {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div className="card-body text-center">
            <h3>{user.id} {user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
