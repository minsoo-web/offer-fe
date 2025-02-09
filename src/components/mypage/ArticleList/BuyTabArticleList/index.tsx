import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { BuyTabArticle } from '../../Article'
import type { TradeBuyActivityType } from '@constants'
import type { ArticlesElement } from '@types'

export type BuyTabArticleListProps = {
  activityType: TradeBuyActivityType
  articles: ArticlesElement[]
  className?: string
}

export const BuyTabArticleList = ({
  activityType,
  articles,
  className
}: BuyTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <BuyTabArticle activityType={activityType} {...article} />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
