
export default async function Page({ params }) {
  const handle  = (await params).handle
  return <div className="flex min-h-screen bg-purple-400 justify-center items-center">
    <div className="photo"></div>

  </div>
}