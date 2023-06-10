import { Badge, Card, Stack, Text } from "@/components"
import s from "./LiveOpportunities.module.css"

export const LiveOpportunities = () => {
  return (
    <Card>
      <Stack gap={7}>
        <Text>Live Opportunities</Text>
        <div>
          <Text variant="h1" as="span">245.8K</Text>
          {" "}
          <Text color="success" as="span" weight={500}>+45%</Text>
        </div>

        <div className={s.lineBars}>
          <span className={s.lineBarsActive}></span>
        </div>

        <Stack gap={4} direction="row">
          <Stack gap={1}>
            <Text variant="body" color="gray600"><Badge />DMS RECEIVED</Text>
            <div>
              <Text variant="h4" as="span">9.34K</Text>
              {" "}
              <Text color="success" as="span" weight={500}>+45%</Text>
            </div>
          </Stack>
          <Stack gap={1}>
            <Text variant="body" color="gray600"><Badge />STORY REACT</Text>
            <div>
              <Text variant="h4" as="span">19K</Text>
              {" "}
              <Text color="danger" as="span" weight={500}>-19%</Text>
            </div>
          </Stack>
        </Stack>

        <Stack gap={4} direction="row">
          <Stack gap={1}>
            <Text variant="body" color="gray600"><Badge />STORY MENTIONS</Text>
            <div>
              <Text variant="h4" as="span">34.9K</Text>
              {" "}
              <Text color="success" as="span" weight={500}>+19%</Text>
            </div>
          </Stack>
          <Stack gap={1}>
            <Text variant="body" color="gray600"><Badge />ACTIVE FOLLOWERS</Text>
            <div>
              <Text variant="h4" as="span">76.8K</Text>
              {" "}
              <Text color="success" as="span" weight={500}>+37%</Text>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
