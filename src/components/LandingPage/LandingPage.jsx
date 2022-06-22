import './LandingPage.scss'

const LandingPage = () => {
  return (
    <main className="LandingPage">
        <h1 className='LandingPage__title'>Still alive</h1>
        <section className='LandingPage__container'>
          <article className='LandingPage__knifes'>
            <h2>3x2 in out knifes</h2>
          </article>
          <article className='LandingPage__car'>
            <h2>Comming soon</h2>
          </article>
          <article className='LandingPage__puppy'>
            <h2>New Wardog!</h2>
            <p>It's the utimate killmachine!</p>
          </article>
        </section>
    </main>
  )
}

export default LandingPage