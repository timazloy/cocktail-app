import NotFoundGif from '../../shared/assets/travolta-waiting.gif'
import './NotFoundPage.scss'

export default function NotFoundPage() {
  return (
    <div className="notFound-page">
      <h1 className="notFound-page__title">Страница не найдена</h1>
      <img className="notFound-page__gif" loading="lazy" src={NotFoundGif} alt="404-image" />
    </div>
  )
}
