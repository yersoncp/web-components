import React from 'react';
import { Card, Stack, Tabs, Text } from '@/components';
import s from "./Messages.module.css";

const MENU = [
  { id: 1, label: "Activities", active: true },
  { id: 2, label: "My account", active: false },
  { id: 3, label: "What's new", active: false },
]

export const Messages = () => {
  return (
    <Card>
      <Stack gap={4} fullH>
        <Text variant="h3" weight={400}>Messages</Text>

        <Stack align='center' justify='center' fullH gap={4}>
          <div className={s.icon}>🙂</div>
          <Text variant="h4" color="gray400">No incoming messages</Text>
          <Text variant="body" color="gray600" align='center'>Oh no. You still have no incoming messages in your inbox. Come back another time.</Text>
        </Stack>
      </Stack>
    </Card>
  )
};
