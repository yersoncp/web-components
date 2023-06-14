import React from 'react';
import s from "./TrafficChannel.module.css";
import { BarChart, Card, Stack, Tabs, Text } from '@/components';

const DATA = [
  { id: 1, value: 345, label: "Direct" },
  { id: 2, value: 277, label: "Search" },
  { id: 3, value: 320, label: "Market" },
  { id: 4, value: 297, label: "Social" },
  { id: 5, value: 237, label: "Other" },
]

const MENU = [
  { id: 1, label: "Hotline", active: true },
  { id: 2, label: "Balance", active: false },
  { id: 3, label: "Total", active: false },
]

export const TrafficChannel = () => {
  return (
    <Card>
      <Stack gap={6}>
        <Text>Traffic Channel</Text>

        <Tabs menu={MENU} />

        <Stack direction='row' className={s.body} gap={4}>
          <div>
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

          <div>
            <BarChart data={DATA} />
          </div>
          
        </Stack>
      </Stack>
    </Card>
  )
};
