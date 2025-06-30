import './Skeleton.scss'

export function Skeleton() {
  return (
    <div className="product-card skeleton">
      <div className="product-card__left">
        <div className="skeleton__title" />
        <div className="skeleton__buttons">
          <div className="skeleton__button" />
          <div className="skeleton__button" />
          <div className="skeleton__button" />
          <div className="skeleton__button" />
          <div className="skeleton__button" />
          <div className="skeleton__button" />
        </div>
        <div className="skeleton__properties">
          <div className="skeleton__property-line" />
          <div className="skeleton__property-line" />
          <div className="skeleton__property-line" />
        </div>
        <div className="skeleton__instructions" />
        <div className="skeleton__lists">
          <div className="skeleton__list" />
          <div className="skeleton__list" />
        </div>
      </div>
      <div className="product-card__image-wrapper">
        <div className="skeleton__image" />
      </div>
    </div>
  )
}
