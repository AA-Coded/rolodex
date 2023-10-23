// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList  from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ cats, setCats ] = useState([]);
  console.log('render')


  useEffect(() => {
    console.log('effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setCats(users))
  }, [])



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)
  }

  const filteredCats = cats.filter((cat) => {
    return cat.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">
         <h1 className='app-title'>Cats</h1>
         <SearchBox
         className='monsters-search-box' 
         onChangeHandler={onSearchChange}
         placeholder='search cats'
         />
        <CardList cats={filteredCats}/>
      </div>
  )
}

export default App;
