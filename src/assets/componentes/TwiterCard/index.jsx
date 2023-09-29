


const TwiterCard=(props)=>{
  const {nombre,correo,isFollow,format}=props
    return <article className="tw-followCard">
    <header  className="tw-followCard-header">
      <img
       className="tw-followCard-avatar"
        src="https://avatars.githubusercontent.com/u/70038546?v=4"
        alt="El avatar de SimonDev"
      />
      <div className='tw-followCard-info'>
        <strong>{nombre}</strong>
        <span className='tw-followCard-infoUser' >{format(correo)}</span>
      </div>
    </header>

    <aside className="tw-followCard-aside">
      <button className='tw-followCard-button'>Seguir</button>
    </aside>
  </article>
}

export default TwiterCard;