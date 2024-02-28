import style from './Newsletter.module.css';

function Newsletter () {
  return (
    <section className={style.Newsletter}>
      <h2>Sign up for my weekly newsletter!</h2>
      <p>Weekly emails with my latest recipes, cooking tips and tricks and product recommendations!</p>
      <form className={style.newsForm}>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <button type="submit">Sign up</button>
      </form>
    </section>
  )
}
export default Newsletter;