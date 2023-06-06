import React, { ReactNode } from 'react';
import s from "./BlockInsight.module.css";
import { Stack, Text } from '@/components';
import { ArrowRightUp } from '@/components/icons';

const BlockInsight = () => {
  return (
    <div className={s.container}>
      <Stack gap={8}>
        <Stack direction='row' align='center' justify='space-between'>
          <div>
            <Text>
              Insigth
            </Text>
          </div>
          <div>
            <Stack direction='row' gap={1}>
              <button className={s.button}>
                This week
                <i className={s.arrowDown}></i>
              </button>
              <button className={s.button}>…</button>
            </Stack>
          </div>
        </Stack>

        <Stack gap={2} direction='row'>
          <span className={s.percent}>89%</span>
          <span className={s.icon}>
            <ArrowRightUp width={18} />
          </span>
        </Stack>

        <Stack gap={4}>
          <div>
            <Text variant='h4' as='span' color='gray200'>
              Increase in your revenue
            </Text>
            {' '}
            <Text variant='h4' as='span' color='gray600'>
              by end oh this month is forecasted
            </Text>
          </div>
          <Text variant='body' color='gray600'>
            Harver is about to recieve 15k new customers which results in 78% in revenue.
          </Text>
        </Stack>

      </Stack>
    </div>
  )
};
export default React.memo(BlockInsight);