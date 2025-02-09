import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { SaleTabArticle } from '../../Article'
import type { ArticlesElement, TradeStatus } from '@types'

export type SaleTabArticleListProps = {
  articles: ArticlesElement[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}

export const SaleTabArticleList = ({
  articles,
  hasToken,
  onChangeTradeStatus,
  className
}: SaleTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <SaleTabArticle
              {...article}
              hasToken={hasToken}
              onChangeTradeStatus={onChangeTradeStatus}
            />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
