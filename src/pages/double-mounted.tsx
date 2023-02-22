/* eslint-disable no-console */
import { CodePreview } from '~/components/CodePreview'

const code = `useEffect(() => {
  console.log('Page Mounted')
  alert('Page Mounted')
  return () => {
    console.log('Page UnMounted')
    alert('Page UnMounted')
  }
}, [])`

/* eslint-disable no-alert */
const DoubleMounted = () => {
  useEffect(() => {
    console.log('Page Mounted')
    alert('Page Mounted')
    return () => {
      console.log('Page UnMounted')
      alert('Page UnMounted')
    }
  }, [])

  return (
    <>
      <div className="text-2xl flex flex-col justify-center items-center pb-10">
        {'You\'ll notice that the page trigger "Page Mounted" twice on the first load.'}
        <button className="mt-10 text-xl b-1 px-3 py-1" onClick={() => location.reload()}>Reload</button>
      </div>
      <CodePreview code={code} />
    </>
  )
}

export default DoubleMounted
