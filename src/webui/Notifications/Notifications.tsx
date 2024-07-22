import React from 'react';
import { Badge, Card, Stack, Tabs, Text } from '@/components';
import s from "./Notifications.module.css";

const MENU = [
  { id: 1, label: "Activities", active: true },
  { id: 2, label: "My account", active: false },
  { id: 3, label: "What's new", active: false },
]

export const Notifications = () => {
  return (
    <Card>
      <Stack gap={4}>
        <Text variant="h3" weight={400}>Notifications</Text>

        <Tabs menu={MENU} />

        <Stack gap={3}>
          <Stack align='center' gap={2} direction='row'>
            <img
              width={42}
              src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=Overall&clotheColor=Pink&eyeType=Wink&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Brown' />

            <Stack>
              <div>
                <Text as="span" variant="body" weight={500}>Bessie Coope</Text>
                {" "}
                <Text as="span" variant="body" color="gray600">started following you</Text>
              </div>
              <div>
                <Text as="span" variant="body" color="gray600">Just now</Text>
                {" · "}
                <Text as="span" variant="body" color="gray600">Online</Text>
                {" "}
                <Badge />
              </div>
            </Stack>
          </Stack>

          <Stack align='center' gap={2} direction='row'>
            <img
              width={42}
              src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Skull&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Vomit&skinColor=Yellow'
            />

            <Stack>
              <div>
                <Text as="span" variant="body" weight={500}>Conrad Smith</Text>
                {" "}
                <Text as="span" variant="body" color="gray600">started following you</Text>
              </div>
              <div>
                <Text as="span" variant="body" color="gray600">3 hours ago</Text>
                {" · "}
                <Text as="span" variant="body" color="gray600">Online</Text>
                {" "}
                <Badge />
              </div>
            </Stack>
          </Stack>

          <Stack align='center' gap={2} direction='row'>
            <img
              width={42}
              src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Brown'
            />

            <Stack>
              <div>
                <Text as="span" variant="body" weight={500}>Alice Doe</Text>
                {" "}
                <Text as="span" variant="body" color="gray600">started following you</Text>
              </div>
              <div>
                <Text as="span" variant="body" color="gray600">7 hours ago</Text>
                {" · "}
                <Text as="span" variant="body" color="gray600">Online</Text>
                {" "}
                <Badge />
              </div>
            </Stack>
          </Stack>

          <Stack align='center' gap={2} direction='row'>
            <img
              width={42}
              src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hatColor=Blue02&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Blonde&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Hearts&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Brown'
            />

            <Stack>
              <div>
                <Text as="span" variant="body" weight={500}>Nate Slow</Text>
                {" "}
                <Text as="span" variant="body" color="gray600">started following you</Text>
              </div>
              <div>
                <Text as="span" variant="body" color="gray600">1 day ago</Text>
                {" · "}
                <Text as="span" variant="body" color="gray600">Online</Text>
                {" "}
                <Badge />
              </div>
            </Stack>
          </Stack>
        </Stack>

        <Text as="span" variant="body" color="gray600">4 notifications</Text>

      </Stack>
    </Card>
  )
};
