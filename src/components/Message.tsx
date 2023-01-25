const Text = (props: {content:string}) => {
  const content = props
  console.log(typeof content)

  return <p className="text">content</p>
}

const Message = (props: {}) => {
  const content1 = "this is parent component"
  const content2 = "Message uses Text Component"

  return (
    <div>
      <Text content={content1}/>
      <Text content={content2}/>
    </div>
  )
}

export default Message