import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('clicky click click!')
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header