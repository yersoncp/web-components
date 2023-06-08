import React, { ReactNode } from 'react';
import s from "./TrafficChannel.module.css";
import { Stack, Text } from '@/components';

const TrafficChannel = () => {
  return (
    <div className={s.container}>
      <Stack gap={6}>
        <Text>Traffic Channel</Text>

        <div className={s.menu}>
          <button className={`${s.menuLink} ${s.menuLinkActive}`}>Hotline</button>
          <button className={s.menuLink}>Balance</button>
          <button className={s.menuLink}>Total</button>
        </div>

        <Stack direction='row' className={s.body}>
          <Stack gap={8}>
            <div>
              <Text variant="h1">47.2%</Text>
              <div>
                <Text variant='h5' as="span" color="gray200">6,890</Text>
                {" "}
                <Text variant='h5' as="span" color="gray600">increased</Text>
              </div>
            </div>

            <div>
              <Text as="span" color="gray200">7 products are popular among new customer</Text>
              {" "}
              <Text as="span" color="gray600">consider using them is prospecting campaigns</Text>
            </div>
          </Stack>
          <div></div>
        </Stack>

        <Stack direction='row' gap={3}>
          <span className={`${s.stats} ${s.statsGreen}`}>Direct</span>
          <span className={`${s.stats} ${s.statsYellow}`}>Search</span>
          <span className={`${s.stats} ${s.statsRed}`}>Market</span>
          <span className={`${s.stats} ${s.statsBlue}`}>Social Media</span>
          <span className={`${s.stats} ${s.statsPink}`}>Other</span>
        </Stack>
      </Stack>
    </div>
  )
};
export default React.memo(TrafficChannel);