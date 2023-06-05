const db = require('../db')
const  { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const willFerrell = new Actor(
        {
            name: "Will Ferrell",
            age: 55,
            isAlive: true
            
        })
        
        await willFerrell.save()
    
    
    
    const jimCarrey = new Actor(
        {
            name: "Jim Carrey",
            age: 61,
            isAlive: true
        })
        
        await jimCarrey.save()
    
    
    
    const jackieChan = new Actor(
        {
            name: "Jackie Chan",
            age: 69,
            isAlive: true
        })
        
        await jackieChan.save()
    
    
    
    
    const daveChappelle = new Actor(
        {
            name: "Dave Chappelle",
            age: 49,
            isAlive: true
        })
        
        daveChappelle.save()
    
    
    
    
    const margotRobbie = new Actor(
        {
            name: "Margot Robbie",
            age: 32,
            isAlive: true
        })
        
        margotRobbie.save()
}