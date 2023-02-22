/* eslint-disable no-console */
/* eslint-disable no-alert */

const NAV = [
  { label: 'Double Mounted', path: '/double-mounted' },
]
const Index = () => {
  const nav = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center">
      {
        NAV.map(({ label, path }) =>
          <div className="text-xl p-1 mb-5 op-80 hover:op-100 cursor-pointer" key={path} onClick={() => nav(path)}>
            {label}
          </div>,
        )
      }
    </div>
  )
}

export default Index
