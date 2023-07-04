import styled from '@emotion/styled'
import { Avatar, Badge, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { TRANSACTION_TYPE, USER } from '@constants'
import type { TransactionType } from '@types'

export type UserProfileProps = {
  image?: string
  nickName: string
  location: string
  level: number
} & ProfileTypeProps
interface OfferProfileProps {
  type?: 'offer'
  date: string
  transactionType: TransactionType
}
interface BasicProfileProps {
  type?: 'basic'
  date: never
  transactionType: never
}
type ProfileTypeProps = OfferProfileProps | BasicProfileProps

export const UserProfile = ({
  nickName,
  image = '',
  location,
  level,
  date,
  transactionType,
  type = 'basic'
}: UserProfileProps): ReactElement => {
  const isOfferProfile = type === 'offer'

  return (
    <StyledUserProfile>
      <Avatar alt={`user-profile`} src={image} />
      <StyledProfileText>
        <StyledUserName>
          <Text styleType="body02B" tag="p">
            {nickName}
          </Text>
          <Badge colorType="orange">
            {USER.level}
            {level}
          </Badge>
        </StyledUserName>
        <Text color="grayScale70" styleType="caption01M" tag="p">
          {location}
          {isOfferProfile && ` · ${TRANSACTION_TYPE[transactionType]}`}
        </Text>
        {isOfferProfile && (
          <Text color="grayScale70" styleType="caption01M" tag="p">
            {date}
          </Text>
        )}
      </StyledProfileText>
    </StyledUserProfile>
  )
}

const StyledUserProfile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const StyledProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const StyledUserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
