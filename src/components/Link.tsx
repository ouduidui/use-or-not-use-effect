interface Props {
  list: { link: string; label: string }[]
}

export const Link = ({ list }: Props) => {
  if (list.length <= 0)
    return null

  return (
    <div className="text-left text-xl w-full">
      <div className="pb-3">Links :</div>
      {list.map(({ link, label }) => <a className="color-blue" target="_blank" href={link} key="link" rel="noreferrer">{label}</a>)}
    </div>
  )
}
