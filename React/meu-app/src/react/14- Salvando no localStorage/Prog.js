import React, { useState, useEffect } from 'react'
import Item from './components/Item'
import ProgForm from './components/ProgForm'
import List from './components/List'
import './style.css'

const SAVED_ITEMS = "savedItems"

function Prog() {

    const [items, setItems] = useState([]);

    useEffect(() =>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    },[items])

    function onAddItem(text) {

        let it = new Item(text);

        setItems([...items, it])
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    return (
        <div className="container">
            <h1>Prog</h1>

            <ProgForm onAddItem={onAddItem}></ProgForm>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )

}

export default Prog