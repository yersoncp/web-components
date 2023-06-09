import React, { ReactNode } from 'react';
import s from "./BlockInsight.module.css";
import { Stack, Text } from '@/components';
import { ArrowRightUp } from '@/components/Icons';

type InsightItemProps = {
  percent: number
  title1: string
  title2: string
  subtitle: string
}

const InsightItem = ({ percent, title1, title2, subtitle }: InsightItemProps) => {
  return (
    <Stack gap={4}>
      <Stack gap={2} direction='row'>
        <span className={s.percent}>{percent}%</span>
        <span className={s.icon}>
          <ArrowRightUp width={18} />
        </span>
      </Stack>

      <Stack gap={4}>
        <div>
          <Text variant='h4' as='span' color='gray200'>
            {title1}
          </Text>
          {' '}
          <Text variant='h4' as='span' color='gray600'>
            {title2}
          </Text>
        </div>
        <Text variant='body' color='gray600'>
          {subtitle}
        </Text>
      </Stack>
    </Stack>
  )
};
export default React.memo(InsightItem);