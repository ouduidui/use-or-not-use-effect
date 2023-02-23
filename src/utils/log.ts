/* eslint-disable no-console */
/* eslint-disable no-alert */

const PREFIX = 'DEMO_SHOW: '

export const log = (...args: (string | number)[]) => {
  const msg = PREFIX + args.join(' ')
  console.log(msg)
  if (!__DEV__) alert(msg)
}
