import { Badge, Button, Card, Stack, Text } from "@/components";
import s from "./SalesByTime.module.css";

const DATA = [
  { day: 1, value: 0 },
  { day: 2, value: 3 },
  { day: 3, value: 2 },
  { day: 4, value: 1 },
  { day: 5, value: 1 },
  { day: 6, value: 0 },
  { day: 7, value: 1 },
  { day: 8, value: 1 },
  { day: 9, value: 7 },
  { day: 10, value: 4 },
  { day: 11, value: 1 },
  { day: 12, value: 2 },
  { day: 13, value: 4 },
  { day: 14, value: 1 },
  { day: 15, value: 1 },
  { day: 16, value: 1 },
  { day: 17, value: 1 },
  { day: 18, value: 0 },
  { day: 19, value: 0 },
  { day: 20, value: 3 },
  { day: 21, value: 4 },
  { day: 22, value: 0 },
  { day: 23, value: 1 },
  { day: 24, value: 1 },
  { day: 25, value: 2 },
  { day: 26, value: 2 },
  { day: 27, value: 7 },
  { day: 28, value: 6 },
  { day: 29, value: 1 },
  { day: 30, value: 0 },
  { day: 31, value: 0 },
  { day: 32, value: 3 },
  { day: 33, value: 2 },
  { day: 34, value: 1 },
  { day: 35, value: 1 },
  { day: 36, value: 0 },
  { day: 37, value: 1 },
  { day: 38, value: 1 },
  { day: 39, value: 7 },
  { day: 40, value: 4 },
  { day: 41, value: 1 },
  { day: 42, value: 2 },
  { day: 43, value: 4 },
  { day: 44, value: 1 },
  { day: 45, value: 5 },
  { day: 46, value: 6 },
  { day: 47, value: 14 },
  { day: 48, value: 0 },
  { day: 49, value: 0 },
  { day: 50, value: 3 },
  { day: 51, value: 4 },
  { day: 52, value: 0 },
  { day: 53, value: 1 },
  { day: 54, value: 1 },
  { day: 55, value: 2 },
  { day: 56, value: 2 },
  { day: 57, value: 3 },
  { day: 58, value: 2 },
  { day: 59, value: 1 },
  { day: 60, value: 0 },
];

export const SalesByTime = () => {
  const max = Math.max(...(DATA?.map(e => e.value)));

  const getOpacityValue = (value: number) => {
    if (!value) {
      return 1;
    }
    return value / max;
  }

  return <>
    <Card>
      <Stack gap={4}>
        <Text>Sales by time</Text>

        <Stack justify="space-between" direction="row">
          <Text color="gray800">Last {DATA.length} days</Text>
          <Text color="gray800">Max value: <b>{max}</b></Text>
        </Stack>

        <div className={s.container}>
          {DATA?.map((cell, idx) => (
            <span
              className={s.cell}
              key={idx}
              style={{
                opacity: getOpacityValue(cell.value),
                background: !cell.value ? "#222" : ""
              }}
            ></span>
          ))}
        </div>

        <Stack direction="row" gap={4}>
          <Text color="gray800" variant="body">
            <span className={s.min} /> Min
          </Text>
          <Text color="gray800" variant="body">
            <span className={s.max} /> Max
          </Text>
        </Stack>
      </Stack>
    </Card>
  </>
}
