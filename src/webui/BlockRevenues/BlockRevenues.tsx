import { BarChart, Card, Stack, Text } from "@/components";
import s from "./BlockRevenues.module.css";

const BlockRevenues = () => {
  return <>
    <Card>
      <Stack gap={2}>
        <Text>Revenues</Text>
        <div>
          <Text variant="h3" as="span" weight={500}>$22.3K</Text>
          {" "}
          <Text as="span" color="success" weight={500}>+45%</Text>
        </div>
        <BarChart />
      </Stack>
    </Card>
  </>
}

export default BlockRevenues;
