/* eslint-disable no-console */
/* eslint-disable no-alert */

const NAV = [
  { label: 'Double Mounted', path: '/double-mounted' },
]
const Index = () => {
  const nav = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl mb-15">USE OR NOT USER EFFECT</div>
      <section>
        <div className="text-2xl mb-3">DEMO SHOW</div>
        {
          NAV.map(({ label, path }) =>
            <div
              className="text-xl p-1 mb-5 b-b op-80 hover:op-100 cursor-pointer"
              key={path}
              onClick={() => nav(path)}
            >
              {label}
            </div>,
          )
        }
      </section>
    </div>
  )
}

export default Index
