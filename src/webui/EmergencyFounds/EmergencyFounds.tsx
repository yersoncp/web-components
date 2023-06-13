import { Button, Card, FoundLevelChart, Stack, Text } from "@/components";

export const EmergencyFounds = () => {
  return <>
    <Card>
      <Stack gap={6}>
        <Text>Emergency founds</Text>
        <div>
          <Text variant="h3" as="span" weight={500}>$10.3K</Text>
          {" "}
          <Text as="span" color="gray600">(2 months of living expenses)</Text>
        </div>

        <FoundLevelChart min={0} max={12} value={4} />

        <Stack gap={2}>
          <Text color="success" variant="h5" weight={500}>Great job! Abo.</Text>
          <Text color="gray400">You have optimal amount of Emergency cash.</Text>
        </Stack>

        <Button>View graphs</Button>

      </Stack>
    </Card>
  </>
}
