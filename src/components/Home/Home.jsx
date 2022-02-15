import './Home.css'

const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  
  const dish = dishes.map((dish) => {
    console.log(dish)
    return (
      <div key={dish.id} >
        <span>{dish.name}</span>
        <br />
        <span>{dish.description}</span>
        <br />
        <span>{dish.price}</span>
      </div>
    )   
  });

  
const Home = () => {
    return (
      <div className="dishes">{dish}</div>
    )
  }
  
  export default Home