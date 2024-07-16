import scss from './Map.module.scss'
const Map = () => {
  return (
    <section className={scss.Map}>
      <div className="container">
        <div className={scss.content}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2072.07138689659!2d76.20940006060405!3d42.46037573849906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b259f87c3f61f%3A0x2fc64168a1c70e54!2z0KDQtdGB0YLQvtGA0LDQvSDQnNGD0YDQsNGB!5e0!3m2!1sru!2skg!4v1721145991931!5m2!1sru!2skg" width="600" height="450"  loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Map