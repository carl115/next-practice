import Users from "@/components/Users"

export async function getServerSideProps() {
  const res = await fetch('https://reqres.in/api/users')
  const { data } = await res.json()
  const users = data
  return { props: { users } }
}

export default function index({ users }) {
  return <Users users={users} />
}

