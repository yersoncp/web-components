import React from 'react';
import { Badge, Button, Card, Stack, Tabs, Text } from '@/components';
import s from "./YouPay.module.css";

const MENU = [
  { id: 1, label: "Activities", active: true },
  { id: 2, label: "My account", active: false },
  { id: 3, label: "What's new", active: false },
]

export const YouPay = () => {
  return (
    <Card>
      <Stack gap={3} fullH>
        <Text>You pay</Text>

        <Stack direction="row" justify="space-between">
          <Stack gap={1}>
            <div>
              <Text variant="h1" as="span">3,867</Text>
              <Text variant="h1" as="span" color="gray800">.34</Text>
              {" "}
              <Text color="success" as="span" weight={500}>+45%</Text>
            </div>
            <Text color="gray600">= $359.67 <Badge /></Text>
          </Stack>
          <Button>TRX</Button>
        </Stack>

        <Text>You receive</Text>

        <Stack direction="row" justify="space-between">
          <Stack gap={1}>
            <div>
              <Text variant="h1" as="span">23,418</Text>
              <Text variant="h1" as="span" color="gray800">.18</Text>
              {" "}
              <Text color="success" as="span" weight={500}>+27%</Text>
            </div>
            <Text color="gray600">= $2359.67 <Badge /></Text>
          </Stack>
          <Button>MATIC</Button>
        </Stack>

        <Stack>

        </Stack>

        <Stack gap={2}>
          <Stack direction="row" justify="space-between">
            <Text variant="small" color="gray600">Rate</Text>
            <Text variant="small" color="gray200">1 TRX = 0.042783939 MATIC</Text>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text variant="small" color="gray600">Fee</Text>
            <Text variant="small" color="gray200">0.2%</Text>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text variant="small" color="gray600">Withdrawal fee</Text>
            <Text variant="small" color="gray200">4 Matic</Text>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text variant="small" color="gray600">Time</Text>
            <Text variant="small" color="gray200">= 10 Min</Text>
          </Stack>
        </Stack>

      </Stack>
    </Card>
  )
};
