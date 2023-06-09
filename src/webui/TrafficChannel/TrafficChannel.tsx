import React, { ReactNode } from 'react';
import s from "./TrafficChannel.module.css";
import { BarChart, Card, Stack, Text } from '@/components';

const TrafficChannel = () => {
  return (
    <Card>
      <Stack gap={6}>
        <Text>Traffic Channel</Text>

        <div className={s.menu}>
          <button className={`${s.menuLink} ${s.menuLinkActive}`}>Hotline</button>
          <button className={s.menuLink}>Balance</button>
          <button className={s.menuLink}>Total</button>
        </div>

        <Stack direction='row' className={s.body} gap={4}>
          <div style={{ width: "35%" }}>
            <Stack gap={8} justify="space-between">
              <div>
                <div>
                  <Text as="span" variant="h1">47.2%</Text>
                  {" "}
                  <Text as="span" color="success" weight={500}>+1.25%</Text>
                </div>
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
          </div>

          <div style={{ width: "65%" }}>
            <BarChart />
          </div>
          
        </Stack>
      </Stack>
    </Card>
  )
};
export default React.memo(TrafficChannel);