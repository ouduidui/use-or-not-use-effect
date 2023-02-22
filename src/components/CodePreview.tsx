import useDark from '~/hooks/useDark'

export const CodePreview = (props: { code: string }) => {
  const { code } = props

  if (!code) return null

  const { isDark } = useDark()
  const theme = useMemo(() => isDark ? githubDark : githubLight, [isDark])
  // eslint-disable-next-line react/jsx-no-undef
  return <CodeMirror className="text-left text-xl" extensions={[langs.tsx()]} theme={theme} value={code} />
}
