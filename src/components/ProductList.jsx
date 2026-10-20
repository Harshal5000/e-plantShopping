import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice';
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;
export const categories = [
 { name: 'Air Purifying Plants', description: 'Breathe easier with beautiful, natural air refreshers.', plants: [
  ['snake','Snake Plant',18,'photo-1593482892290-f54927ae2b7b'],['spider','Spider Plant',14,'photo-1572688484438-313a6e50c333'],['peace','Peace Lily',24,'photo-1593691509543-c55fb32e5cee'],['pothos','Golden Pothos',16,'photo-1600411833114-4b8c6c18a3c9'],['rubber','Rubber Plant',29,'photo-1545241047-6083a3684587'],['zz','ZZ Plant',26,'photo-1497250681960-ef046c08a56e']
 ]},
 { name: 'Aromatic Plants', description: 'Fresh scents and fresh flavors, straight from your windowsill.', plants: [
  ['lavender','Lavender',19,'photo-1499002238440-d264edd596ec'],['rosemary','Rosemary',15,'photo-1515586000433-45406d8e6662'],['mint','Fresh Mint',12,'photo-1628556270448-4d4e4148e1b1'],['basil','Sweet Basil',13,'photo-1618375569909-3c8616cf7733'],['thyme','Garden Thyme',11,'photo-1466692476868-aef1dfb1e735'],['jasmine','Jasmine',27,'photo-1562690868-60bbe7293e94']
 ]},
 { name: 'Succulents & Easy Care', description: 'Low maintenance, high charm—perfect for busy plant lovers.', plants: [
  ['aloe','Aloe Vera',17,'photo-1501004318641-b39e6451bec6'],['echeveria','Echeveria',15,'photo-1459156212016-c812468e2115'],['jade','Jade Plant',20,'photo-1485955900006-10f4d324d411'],['cactus','Mini Cactus',12,'photo-1509423350716-97f9360b4e09'],['haworthia','Haworthia',16,'photo-1416879595882-3373a0480b5b'],['string','String of Pearls',22,'photo-1525498128493-380d1990a112']
 ]}
];
export const products = categories.flatMap(c => c.plants.map(([id,name,price,img]) => ({id,name,price,image:photo(img),category:c.name})));
export default function ProductList() {
 const dispatch = useDispatch(); const cart = useSelector(selectCartItems);
 return <main className="catalog container"><div className="catalog-intro"><span className="eyebrow">THE PLANT COLLECTION</span><h1>Find your new <em>leafy friend.</em></h1><p>Thoughtfully chosen greenery for every room, mood, and moment.</p><div className="catalog-stats">18 plants <span>•</span> 3 collections <span>•</span> Endless joy</div></div>
 {categories.map(category => <section className="category" key={category.name}><div className="section-heading"><div><span className="eyebrow">EXPLORE THE COLLECTION</span><h2>{category.name}</h2><p>{category.description}</p></div><span className="category-count">06 PLANTS</span></div><div className="product-grid">{category.plants.map(([id,name,price,img]) => {const plant=products.find(p=>p.id===id);const added=cart.some(i=>i.id===id);return <article className="plant-card" key={id}><div className="plant-image"><img src={plant.image} alt={name} loading="lazy"/><span className="plant-tag">{category.name.split(' ')[0]}</span></div><div className="plant-details"><h3>{name}</h3><p className="plant-subtitle">A little green goes a long way</p><div className="plant-bottom"><strong>${price.toFixed(2)}</strong><button disabled={added} onClick={()=>dispatch(addItem(plant))}>{added?'✓ Added':'＋ Add to Cart'}</button></div></div></article>})}</div></section>)}
 </main>;
}
