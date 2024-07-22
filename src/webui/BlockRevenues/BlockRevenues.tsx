import { BarChart, Card, Stack, Text } from "@/components";

const DATA = [
  { id: 1, value: 183, label: "Jan" },
  { id: 2, value: 189, label: "Feb" },
  { id: 3, value: 199, label: "Mar" },
  { id: 4, value: 205, label: "Apr" },
  { id: 6, value: 187, label: "May" },
  { id: 5, value: 199, label: "Jun" },
  { id: 5, value: 189, label: "Jul" },
  { id: 5, value: 227, label: "Ago" },
  { id: 5, value: 240, label: "Sep" },
  { id: 5, value: 285, label: "Oct" },
  { id: 5, value: 320, label: "Nov" },
  { id: 5, value: 287, label: "Dec" },
]

const LEVEL = 240

export const BlockRevenues = () => {
  return <>
    <Card>
      <Stack gap={4}>
        <Text variant="h3" weight={400}>Revenues</Text>
        <div>
          <Text variant="h3" as="span" weight={500}>$22.3K</Text>
          {" "}
          <Text as="span" color="success" weight={500}>+45%</Text>
        </div>
        <BarChart data={DATA} level={LEVEL} />

        <Text color="gray800">Growth for the last 3 months.</Text>
      </Stack>
    </Card>
  </>
}
