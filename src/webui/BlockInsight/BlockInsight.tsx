import React, { ReactNode } from 'react';
import s from "./BlockInsight.module.css";
import { Button, Carrousel, Stack, Text } from '@/components';
import InsightItem from './InsightItem';

const BlockInsight = () => {
  return (
    <div className={s.container}>
      <Stack gap={8}>
        <Stack direction='row' align='center' justify='space-between'>
          <Text>Insigth</Text>
          <div>
            <Stack direction='row' gap={1}>
              <Button
                options={['This month', 'This year']}
                showArrow={true}
              >This week</Button>
            </Stack>
          </div>
        </Stack>

        <Carrousel>
          <InsightItem
            percent={89}
            title1='Increase in your revenue'
            title2='by end oh this month is forecasted'
            subtitle='Harver is about to recieve 15k new customers which results in 78% in revenue.'
          />

          <InsightItem
            percent={37}
            title1='Increase in the number of visitors'
            title2='is expected in the last 30 days'
            subtitle='Harver is about to receive 35k new visitors to its website which is a 68% increase.'
          />
        </Carrousel>

      </Stack>
    </div>
  )
};
export default React.memo(BlockInsight);