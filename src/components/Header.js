import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color={props.showAddButton ? 'red' : 'green'} text={props.showAddButton ? 'Close' : 'Add'} onClick={props.onAdd} />
    </header>
  )
}

export default Header