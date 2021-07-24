export const isOnline = () => {
  return process.env.NODE_ENV === 'production'
}