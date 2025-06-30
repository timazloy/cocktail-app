import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useAppDispatch'
import { fetchCocktails } from '../../features/cocktails/cocktailSlice'
import { Skeleton } from '../../widgets/Skeleton/Skeleton'
import './CocktailPage.scss'

interface Props {
  code: string
}

export default function CocktailPage({ code }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.cocktails)

  const cocktailList = data[code] || []
  const curCocktail = cocktailList[selectedIndex]

  useEffect(() => {
    if (!data[code]) dispatch(fetchCocktails(code as any))
  }, [code])

  useEffect(() => {
    setSelectedIndex(0)
  }, [code])

  if (loading) {
    return <Skeleton />
  }

  if (error) return <p>Ошибка: {error}</p>
  if (!cocktailList.length || !curCocktail) return null

  function collectPropertiesCocktail(obj, prefix) {
    if (!obj || typeof obj !== 'object') return []

    const result = []

    for (let i = 1; ; i++) {
      const key = `${prefix}${i}`
      const val = obj[key]
      if (val === null || val === '') break
      result.push(val)
    }

    return result
  }

  const measuresArray = collectPropertiesCocktail(curCocktail, 'strMeasure')
  const ingredientsArray = collectPropertiesCocktail(curCocktail, 'strIngredient')

  return (
    <div className="product-card">
      <div className="product-card__left">
        <h1 className="product-card__name">{curCocktail.strDrink}</h1>
        <div className="product-card__buttons card-buttons">
          {cocktailList.map((_, index) => (
            <button
              key={index}
              className={`card-buttons__button ${selectedIndex === index ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
            >
              Вариант {index + 1}
            </button>
          ))}
        </div>

        <div className="product-card__properties properties">
          <h2 className="properties__title">{curCocktail.strCategory}</h2>
          <h2 className="properties__title">{curCocktail.strAlcoholic}</h2>
          <h2 className="properties__title">{curCocktail.strGlass}</h2>
        </div>

        <p className="product-card__text">{curCocktail.strInstructions}</p>

        <div className="product-card__lists lists">
          <ul className="lists__list">
            {measuresArray.map((measure, idx) => (
              <li key={idx}>{measure}</li>
            ))}
          </ul>
          <ul className="lists__list">
            {ingredientsArray.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={curCocktail.strDrinkThumb}
          alt={curCocktail.strDrink}
          loading="lazy"
        />
      </div>
    </div>
  )
}
