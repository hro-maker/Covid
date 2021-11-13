export const getTime=()=>{
  const time=new Date()
  return `${time.getFullYear()}-${time.getMonth().toString().padStart(2,'0')}-${time.getDay().toString().padStart(2,'0')}`
}
