import style from './Favorite.module.css';

export default function Favorite() {

  const favorite_image = "/image_test.png";
  const favorite_url = "/recipe";

  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
      <a href={favorite_url}><img src={favorite_image}/>
      <p>Featured recipe</p></a>
      </div>
      <div className={style.textContainer}>
        <h1>Pineapple + Smoked Jackfruit Pizza</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut magni, error labore non temporibus saepe amet sint sapiente sunt tenetur quis. Quis, natus? Mollitia eaque cupiditate repellendus ipsam deserunt.</p>
        <button>View recipe</button>
      </div>
    </section>
  );
}