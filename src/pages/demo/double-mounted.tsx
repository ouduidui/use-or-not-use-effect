import { Link } from '~/components/Link'
import { CodePreview } from '~/components/CodePreview'
import { log } from '~/utils/log'

const code = `useEffect(() => {
  console.log('Page Mounted')
  alert('Page Mounted')
}, [])`

const links = [{
  link: 'https://beta.reactjs.org/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development',
  label: 'Fixing bugs found by re-running Effects in development',
}]

const DoubleMounted = () => {
  useEffect(() => {
    log('Page Mounted')
  }, [])

  return (
    <div>
      <div className="text-2xl">{'You\'ll notice that the page trigger "Page Mounted" twice on the first load.'}</div>
      <button className="mt-10 text-xl b-1 px-3 py-1 mb-10" onClick={() => location.reload()}>Reload</button>
      <CodePreview code={code} />
      <Link list={links} />
    </div>
  )
}

export default DoubleMounted
