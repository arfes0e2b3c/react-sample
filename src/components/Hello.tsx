const Hello = () => {
  const onClick = () => {
    alert('hello')
  }
  const text = "hello react"

  return (
    <div onClick={onClick}>
      {text}
      <a href="" className="nnn">ggg</a>
    </div>
  )
}

export default Hello