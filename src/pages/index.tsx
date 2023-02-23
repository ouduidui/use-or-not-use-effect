const DEMO_NAV = [
  { label: 'Double Mounted', path: '/demo/double-mounted' },
  { label: 'Setup and Cleanup', path: '/demo/setup-and-cleanup' },
]
const Index = () => {
  const nav = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl mb-15">USE OR NOT USER EFFECT</div>
      <section>
        <div className="text-2xl mb-3">DEMO SHOW</div>

        {
          DEMO_NAV.map(({ label, path }) =>
            <div
              className="mb-5 "
              key={path}
              onClick={() => nav(path)}
            >
              <span className="text-xl p-1 b-b op-80 hover:op-100 cursor-pointer">{label}</span>
            </div>,
          )
        }
      </section>
    </div>
  )
}

export default Index
