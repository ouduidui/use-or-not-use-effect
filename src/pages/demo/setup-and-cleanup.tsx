import { log } from '~/utils/log'
import { CodePreview } from '~/components/CodePreview'

const code = `let count = 0
const getRandom = () => Math.random().toFixed(5)

const App = () => {
  const [num, setNum] = useState(getRandom())

  useEffect(() => {
    const currentCount = count++
    alert('Setup', currentCount)
    return () => alert('Cleanup', currentCount)
  }, [num])

  return (
    <div>
      <button onClick={() => setNum(getRandom())}>
        Change Num：{num}
      </button>
    </div>
  )
}`

let count = 0
const getRandom = () => Math.random().toFixed(5)

const SetupAndCleanup = () => {
  const [num, setNum] = useState(getRandom())

  useEffect(() => {
    const currentCount = count++
    log('Setup', currentCount)
    return () => log('Cleanup', currentCount)
  }, [num])

  return (
    <div>
      <div className="mb-10">
        <button
          className="text-xl b px-3 py-1 mb-5"
          onClick={() => setNum(getRandom())}
        >
          Change Num：{num}
        </button>
        <div className="text-2xl">
          When you change the num, react will run previous cleanup function before runing this setup function.
        </div>
      </div>
      <CodePreview code={code} />
    </div>
  )
}

export default SetupAndCleanup
