/* eslint-disable react/jsx-no-undef */
import useDark from '~/hooks/useDark'

export const CodePreview = (props: { code: string }) => {
  const { code } = props

  if (!code) return null

  const { isDark } = useDark()
  const theme = useMemo(() => isDark ? githubDark : githubLight, [isDark])

  return (
    <div className="text-left text-xl mb-10 w-full">
      <div className="pb-3">Code :</div>
      <CodeMirror extensions={[langs.tsx()]} theme={theme} value={code} />
    </div>
  )
}
